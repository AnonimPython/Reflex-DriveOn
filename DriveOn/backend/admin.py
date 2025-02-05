import reflex as rx
from ..ui.colors import *
from ..ui.admin_pannel import admin_pannel
from ..backend.get_weather import get_weather

from ..database import Cars
from sqlalchemy import select,func


class CountState(rx.State):
    count: int = 0

    @rx.event
    def get_count(self):
        with rx.session() as session:
            #* use func.count to count how many data are in the database
            total_count = session.exec(select(func.count(Cars.id)))
            self.count = total_count.one()[0]  # get the count value

def admin() -> rx.Component:
    return rx.box(
        rx.hstack(
            #* left
            rx.vstack(
                admin_pannel(),
                get_weather(),
            ),
            
            #* right
            rx.box(
                rx.text(f"All Cars: {CountState.count}", font_size="40px", color=YELLOW, weight="bold",margin_bottom="20px"),
                margin_left="30px",  
                margin_top="30px",
                on_mount=CountState.get_count,
            ),
        ),
        background_color=ADMIN_BACKGROUND,
        height="100vh",
    )