import reflex as rx
from rxconfig import config

from ..state import UserData
from ..ui.colors import *
from ..ui.navbar import navbar



def profile() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            rx.box(
                
            ),
            rx.text(UserData.username),
            rx.text(UserData.mail),
            navbar(),
            color="white",
        )
    )