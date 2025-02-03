import reflex as rx
from typing import List, Optional
from ..ui.car_card import car_card
from sqlmodel import select,or_
from ..database import Cars


class SearchState(rx.State):
    search_query: str = ""
    search_results: List[dict] = []

    def search_cars(self):
        with rx.session() as session:
            query = select(Cars).where(
                or_(
                    Cars.company.ilike(f"%{self.search_query}%"),
                    Cars.car_model.ilike(f"%{self.search_query}%")
                )
            ).order_by(Cars.id.desc())

            # Execute query and convert results to dictionaries
            results = session.exec(query).all()
            self.search_results = [
                {
                    "id": car.id,
                    "company": car.company,
                    "car_model": car.car_model,
                    "price": car.price,
                    "image": car.image
                }
                for car in results
            ]

        # TEST
        for result in self.search_results:
            print(f"Found: {result['company']} {result['car_model']} - ${result['price']}/day")

# Компонент для отображения страницы поиска
def search() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.input(
                placeholder="Search cars...",
                on_change=SearchState.set_search_query,
            ),
            rx.button(
                "Search",
                on_click=SearchState.search_cars,
            ),
            rx.cond(
                SearchState.search_results,
                rx.flex(
                    rx.foreach(
                        SearchState.search_results,
                        lambda car: car_card(
                            img_url=car.image,
                            company_name=car.company,
                            car_model=car.car_model,
                            rent_price=car.price,
                            car_id=car.id,
                        ),
                    ),
                    margin_top="30px",
                ),
                rx.text("No results found."),
            ),
        ),
    )