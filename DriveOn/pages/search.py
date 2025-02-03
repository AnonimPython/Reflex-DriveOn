import reflex as rx
from sqlalchemy import select
from sqlmodel import or_
from ..database import Cars

class SearchState(rx.State):
    search_query: str = ""
    
    def search_cars(self):
        with rx.session() as session:
            query = select(Cars.company, Cars.car_model, Cars.price).where(
                or_(
                    Cars.company.ilike(f"%{self.search_query}%"),
                    Cars.car_model.ilike(f"%{self.search_query}%")
                )
            )
            results = session.exec(query).all()
            for result in results:
                print(f"Found: {result[0]} {result[1]} - ${result[2]}/day")

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
        ),
    )
