import reflex as rx
from rxconfig import config

from ..state import UserData
from ..ui.colors import *



def profile() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            rx.text(UserData.username),
            rx.text(UserData.mail),
            color="white"
        )
    )