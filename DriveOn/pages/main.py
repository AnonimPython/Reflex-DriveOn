import reflex as rx

from ..state import UserData
from sqlmodel import select,or_
from ..database import Cars
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

# class CarsDBState(rx.State):
#     cars: list[Cars] = []
    
#     # active_button: str = "tours"

#     #* All cars in DB
#     @rx.event
#     async def get_all_cars(self) -> list[Cars]:
#         # self.active_button = "tours"
#         try:
#             with rx.session() as session:
#                 query = select(Cars).order_by(Cars.id.desc())
#                 self.cars = session.exec(query).all()
#                 print(self.cars, "==================================")
#         except Exception as e:
#             print(f"[WARNING] Error getting tours from BD (get_regular_tours): {e}")
            
class CarsDBState(rx.State):
    cars: list[Cars] = []
    is_loading: bool = False
    
    @rx.event
    async def get_cars(self) -> list[Cars]:
        try:
            with rx.session() as session:
                query = select(Cars).order_by(Cars.id.desc())
                self.cars = session.exec(query).all()
        except Exception as e:
            print(f"[WARNING] Error getting cars from DB: {e}")
            

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
                                f"Hey! {UserData.username}",
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
                # car_card(
                #     img_url="https://images.unsplash.com/photo-1530906358829-e84b2769270f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBsYW1ib3JnaGluaXxlbnwwfHwwfHx8MA%3D%3D",
                #     company_name="Lamborghini",
                #     car_model="Huracan",
                #     rent_price="2000",
                # ),
                # car_card(
                #     img_url="https://wallpapers.com/images/hd/red-smoke-black-lamborghini-9akg35f0l55h1wh9.jpg",
                #     company_name="Lamborghini",
                #     car_model="Huracan",
                #     rent_price="2500",
                # ),
                # car_card(
                #     img_url="https://gateauto.ru/upload/resize_cache/iblock/752/678_423_2/ixbfkr745ee0ykz31q9yv3zw6l6lj27g.webp",
                #     company_name="Ferrari",
                #     car_model="Encho",
                #     rent_price="3300",
                # ),
                width="100%",
                margin_top="30px",
            ),
            
            rx.box(
        rx.cond(
            CarsDBState.is_loading,
            rx.center(rx.spinner()),
            rx.box(
                rx.foreach(
                    CarsDBState.cars,
                    lambda car: car_card(
                        img_url=car.image,
                        company_name=car.company,
                        car_model=car.car_model,
                        rent_price=car.price,
                        car_id=car.id,
                    )
                ),
                margin_top="30px",
            )
        ),
        on_mount=CarsDBState.get_cars
    ),
            
            rx.box(
                navbar(),
            ),
        ),
        background=BACKGROUND,
        height="100vh",
    )