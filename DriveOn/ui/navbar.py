 # *navbar
import reflex as rx


from ..ui.colors import *


def navbar_link(icon: str, url: str) -> rx.Component:
    return rx.link(
        rx.icon(icon),
        href=url, 
        color=GRAY, 
        style={"background-color":YELLOW, "border-radius":"50%","padding":"16px"}
    )


def navbar():
    return rx.box(
        rx.hstack(
            navbar_link("house", "/tours"),
            navbar_link("search", "/tours"),
            navbar_link("user", "/profile"),
            width="100%",
            style={
                "align-items": "center",
                "justify-content": "center",
                "padding": "8px",
            },
        ),
        position="fixed",
        bottom="30px",  
        left="50%",
        transform="translate(-50%, 0)", 
        width="50%", 
        height="70px", 
        border_radius="50px",  
        align_items="center", 
        justify_content="center",
        align_self="center",
        z_index="99",
        background_color="#232323",
    ),