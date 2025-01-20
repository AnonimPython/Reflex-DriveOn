import reflex as rx
from rxconfig import config

from ..state import UserData



def index() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            rx.text("Hello")
        ),
    )