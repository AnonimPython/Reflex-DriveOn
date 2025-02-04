import reflex as rx
from ..ui.colors import *


def admin_links(href: str, title: str, icon: str) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.icon(tag=icon, color="white", size=20),
            rx.text(title, color="white", size="6", weight="bold"),
            width="100%",
            background_color=ADMIN_BACKGROUND,
            border=f"1px solid {ADMIN_BORDER}",
            padding="10px 20px 10px 20px",
            align_items="center",  # Выравнивание элементов по вертикали
            justify_content="flex-start",  # Выравнивание элементов от начала
            border_radius="5px",
        ),
        href=href,
        width="250px",
    )