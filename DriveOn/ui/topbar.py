import reflex as rx
from ..ui.colors import *

def topbar(text: str, link1: str = "/main",link2: str = "/search") -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.box(
                rx.hstack(
                    rx.link(
                        rx.icon(
                            tag="house",
                            style=rx.color_mode_cond(
                                light={"color":YELLOW,},
                                dark={"color":GRAY}
                            )
                        ),
                        href=link1,
                        style=rx.color_mode_cond(
                            light={"background":GRAY, "padding":"10px", "border-radius":"50%"},
                            dark={"background":"#2d3748", "padding":"10px", "border-radius":"50%"}
                        ),
                    ),
                    rx.link(
                        rx.icon(
                            tag="search",
                            style=rx.color_mode_cond(
                                light={"color":YELLOW,},
                                dark={"color":GRAY}
                            )
                        ),
                        href=link2,
                        style=rx.color_mode_cond(
                            light={"background":GRAY, "padding":"10px", "border-radius":"50%"},
                            dark={"background":"#2d3748", "padding":"10px", "border-radius":"50%"}
                        ),
                    ),
                )
            ),
            rx.text(text, color="white", font_size="35px", weight="bold"),
            margin_bottom="25px",
            justify="between",
            align="center",
        ),
    )