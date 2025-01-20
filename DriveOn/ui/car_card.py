import reflex as rx

from ..ui.colors import *


def car_card(
        img_url: str,
        company_name: str,
        car_model: str,
        rent_price: str,
    ):
    return rx.box(
            
            rx.image(
                f"{img_url}",
                width="100%",
                height="auto",
            ),
            rx.box(
                background="rgba(0, 0, 0, 0.5)",  # Полупрозрачный черный фон
                position="absolute",
                top="0",
                left="0",
                right="0",
                bottom="0",
            ),
            rx.box(
                rx.vstack(
                    rx.text(company_name,size="3",margin_bottom="30px"),
                    rx.text(car_model,size="8",weight="bold"),
                ),
                
                color="white",
                position="absolute",
                top="24%",
                left="25%",
                transform="translate(-50%, -50%)",
                z_index="2",
            ),
            rx.box(
                rx.hstack(
                    # text
                    rx.box(
                        rx.vstack(
                            rx.text(
                                "Rent Price",
                                color=LIGHT_GRAY,
                                size="4",
                            ),
                            rx.text(
                                f"${rent_price}",
                                color="white",
                                size="6",
                            ),
                        ),
                    ),
                    width="100%",
                ),
                color="white",
                position="absolute",
                top="70%",
                left="9%",
                # transform="translate(-50%, -50%)",
                z_index="2",
            ),
            # button
            rx.box(
                rx.box(
                    rx.link(
                        rx.icon(tag="arrow-right",color="black"),
                        color=LIGHT_GRAY,
                        # href=f"/car/{car.id}",
                        is_external=False
                    ),
                    padding="15px",
                    border_radius="50%",
                    border=f"1px solid {GRAY}",
                    align_items="center",
                    background=YELLOW,
                    position="absolute",
                    top="74%",
                    left="78%",
                    # transform="translate(-50%, -50%)",
                    z_index="2",
                ),
            ),
                    position="relative",
                    width="fit-content",
                    height="fit-content",
                ),