import reflex as rx
from ..ui.colors import *

def details_circle(icon:str,text:str,db_text:str) -> rx.Component:
    return rx.vstack(
            rx.box(
                rx.icon(tag=f"{icon}",size=35,),
                # color="#92a3bf",
                color=YELLOW,
                background=GRAY,
                width="80px",
                height="80px",
                display="flex",
                align_items="center", 
                justify_content="center",
                border_radius="50%",
            ),
            rx.text(
                f"{text} {db_text}",
                weight="bold",
                align="center",
                width="100%",
            ),
            align="center",
            width="fit-content",
    )