import reflex as rx
from ..ui.colors import *
from ..ui.admin_links import admin_links

def admin_pannel():
    return rx.box(
            rx.center(
                rx.vstack(
                    rx.text("DriveOn", color="white", size="8", weight="bold", margin_bottom="20px",margin_top="10px"),
                    rx.text("Admin Panel", color=YELLOW, size="8", weight="bold", margin_bottom="20px"),
                    admin_links(
                        href="/admin",
                        title="Main",
                        icon="layers-2",
                    ),
                    admin_links(
                        href="/add_car",
                        title="Add Car",
                        icon="plus",
                    ),
                    admin_links(
                        href="/carapplication",
                        title="Applications",
                        icon="file-user",
                    ),
                    admin_links(
                        href="/admin_support",
                        title="Support",
                        icon="circle-user-round",
                    ),
                    spacing="4",
                    align_items="center",
                ),
                
            ),
            margin="10px",
            background_color=PANNEL_BACKGROUND,
            width="300px",
            height="90vh",
            border_radius="10px",
            border=f"1px solid {ADMIN_BORDER}",
        ),