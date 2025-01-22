import reflex as rx
from rxconfig import config

from ..state import UserData
from ..ui.colors import *



def index() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            #* image
            rx.box(
                background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://wallpapers.com/images/hd/dodge-challenger-4k-441zr63yqu5ad0kh.jpg')",
                background_size="cover",
                background_position="center",
                height="70vh",
                width="100%",
            ),
            #* main text | description | button
            rx.container(
                # main text
                rx.box(
                    rx.text(
                        "Find Your ",
                        rx.text.strong("Perfect",color=YELLOW),
                        
                        color="white",
                        size="8"
                    ),
                    rx.text(
                        "Car Today!",
                        color="white",
                        size="8"
                    )
                ),
                rx.flex(
                    # description
                    rx.box(
                        rx.text(
                            "Start your journey with the cor you've always wanted-explore top deals",
                            color=LIGHT_GRAY,
                            size="3"
                        ),
                        margin_top="30px",
                        width="50%",
                    ),
                    rx.box(
                        rx.box(
                            rx.link(
                                rx.icon(tag="arrow-right",color="black"),
                                color=LIGHT_GRAY,
                                href=f"/login",
                                is_external=False
                            ),
                            padding="15px",
                            border_radius="50%",
                            border=f"1px solid {GRAY}",
                            align_items="center",
                            background=YELLOW,
                        ),
                        margin_top="40px",
                    ),
                    justify="between",
                    align_self="center",
                ),
                
                
                
            ),            
        ),
    )