import reflex as rx
from typing import List, Optional
from ..ui.car_card import car_card
from ..ui.navbar import navbar
from ..ui.colors import *

from sqlmodel import select,or_
from ..database import Cars
from .main import CarsDBState


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
        rx.mobile_only(
        rx.container(
            rx.text("DriveOn", color="white",size="8",weight="bold",margin_bottom="20px"),
            rx.flex(
                rx.input(
                    placeholder="Search cars...",
                    on_change=SearchState.set_search_query,
                    width="100%",
                    height="40px",
                    background_color=GRAY,
                    style={
                        "color": "white",
                        "font-size": "20px",
                        "& input::placeholder": {
                            "color": "white"
                        },
                    }
                ),
                rx.button(
                    "Search",
                    on_click=SearchState.search_cars,
                    background_color=YELLOW,
                    color="black",
                    margin_left="10px",
                    height="37px",
                    
                ),
                width="100%",
                align_self="center",
                align_items="center",
                align="center",
            ),
        ),
        rx.vstack(
            rx.text("Search results", color="white",size="4",weight="bold",margin_left="20px",margin_bottom="3px"),
            
            
            rx.cond(
                #* searching by user
                SearchState.search_results,
                rx.flex(
                    # rx.text("Find Car"),
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
                    margin_top="5px",
                ),
                #* all cars in DB
                rx.box(
                    rx.foreach(
                        CarsDBState.cars,
                        lambda car: car_card(
                            img_url=car.image,
                            company_name=car.company,
                            car_model=car.car_model,
                            rent_price=car.price,
                            car_id=car.id,
                        )
                    ),
                    margin_top="5px",
                    on_mount=CarsDBState.get_cars
                ),
            ),
            navbar()
        ),
    )
),
