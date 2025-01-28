import reflex as rx
from rxconfig import config

from ..state import UserData
from ..ui.colors import *
from ..ui.navbar import navbar



def profile() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            rx.box(
                # Background image
                rx.box(
                    background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://media.architecturaldigest.com/photos/5ced629704c41e1a9b9a8bcf/16:9/w_2560%2Cc_limit/Bugatti-LVN-7%2520%255BBugatti%255D.jpg')",
                    background_size="cover",
                    background_position="center",
                    height="35vh",
                    width="100%",
                ),
                # userdata
                rx.box(
                    rx.center(
                        rx.heading(UserData.username),
                        rx.text(UserData.mail),
                        flex_direction="column",
                    ),
                ),
                # support | call support
                rx.box(
                    rx.text("Support Team will help with your problem!", font_size="15px",align_items="center",align_self="center",text_align="center"),
                    rx.flex(
                        rx.box(),
                    ),
                    margin_top="30px",
                ),
                # edit name
                rx.box(),
                
            ),
            
            navbar(),
            color="white",
        )
    )