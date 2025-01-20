import reflex as rx

from ..ui.colors import *


def filter_buttons(
        text: str,
        # id_button: str,
        # function_query: str,
    ):
    return rx.button(
        rx.text(text),
        background=YELLOW,
        color="black",
        border_radius="30px",
        # * tour
        # on_click=function_query
        padding="20px",
        text_align="center",
    ),
    
    
'''
 background=rx.cond(
    # ToursDBState.active_button == id_button,
    # not selected
    "red",
    # selected
    "#f0f1f5"
),

'''