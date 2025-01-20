import reflex as rx
from rxconfig import config

from ..state import UserData
from ..ui.navbar import navbar
from ..ui.filter_buttons import filter_buttons
from ..ui.car_card import car_card
from ..ui.colors import *




class FilterButtonsState(rx.State):
    '''
    cars: list[1] = []
    active_button: str = "all"
    
    
    @rx.event
    async def get_all_cars(self) -> list[Tours]:
        self.active_button = "tours"
        try:
            with rx.session() as session:
                query = select(Tours).order_by(Tours.id.desc())
                self.tours = session.exec(query).all()
        except Exception as e:
            print(f"[WARNING] Error getting tours from BD (get_regular_tours): {e}")
    '''



name = "EVG"
def main() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            #* header
            rx.box(
                #* image | name | links
                rx.hstack(
                    rx.box(
                        # image | name
                        rx.hstack(
                            rx.image(
                                "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg",
                                height="50px",
                                width="50px",
                                border_radius="50%",
                            ),
                            rx.text(
                                f"Hey! {name}",
                                color="white",
                                style={"align-items": "center","align-self": "center","font-size": "20px"},
                            ),
                        ),
                    ),
                    rx.box(
                        # links
                        rx.hstack(
                            rx.box(
                                rx.link(rx.icon(tag="search"),color=LIGHT_GRAY,href="/search"),
                                padding="15px",
                                border_radius="50%",
                                border=f"1px solid {GRAY}",
                                width="fit-content",
                                height="fit-content",
                                display="flex",
                                align_items="center",
                                justify_content="center",
                                background="transparent",
                            ),
                        ),
                    ),
                    justify="between",
                    style={"align-items": "center","align-self": "center"},
                ),
                padding="1em",
            ),
            #* text | buttons filter | additional text
            rx.container(
                # text
                rx.box(
                    rx.text("What do you want to do", color=LIGHT_GRAY),
                    rx.text("Ride today?", color="white",size="8",weight="bold"),
                ),
                # buttons filter
                rx.box(
                    #! remake this block of code. Need automatically filter -> NOT TAKING only this filter buttons
                    rx.scroll_area(
                        rx.flex(
                            filter_buttons(
                                text="All",
                                # id_button="all",
                                # function_query=FilterButtonsState.get_all_cars
                            ),
                            filter_buttons(
                                text="BMW",
                            ),
                            filter_buttons(
                                text="Ford",
                            ),
                            filter_buttons(
                                text="Chevrolet",
                            ),
                            filter_buttons(
                                text="Toyota",
                            ),
                            filter_buttons(
                                text="Honda",
                            ),
                            filter_buttons(
                                text="Nissan",
                            ),
                            filter_buttons(
                                text="Audi",
                            ),
                            filter_buttons(
                                text="Mercedes",
                            ),
                            gap="10px",
                        ),
                    ),
                    margin_top="20px",
                ),
                margin="10px",
            ),
            # cards of cars
            rx.box(
                car_card(
                    img_url="https://images.unsplash.com/photo-1530906358829-e84b2769270f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBsYW1ib3JnaGluaXxlbnwwfHwwfHx8MA%3D%3D",
                    company_name="Lamborghini",
                    car_model="Huracan",
                    rent_price="2000",
                ),
                car_card(
                    img_url="https://wallpapers.com/images/hd/red-smoke-black-lamborghini-9akg35f0l55h1wh9.jpg",
                    company_name="Lamborghini",
                    car_model="Huracan",
                    rent_price="2500",
                ),
                width="100%",
                margin_top="30px",
            ), 
            rx.box(
                navbar(),
            ),
        ),
        background=BACKGROUND,
        height="100vh",
    )