import reflex as rx
from typing import Optional
from sqlmodel import select
from ..database import Cars, CarRentalApp
from reflex_image_zoom import image_zoom
from ..ui.topbar import topbar
from ..ui.details_circle import details_circle
from ..state import UserData
from ..ui.colors import *

from time import sleep
#* .env file
import os
from dotenv import load_dotenv
load_dotenv()

class CarDetailState(rx.State):
    car: Optional[Cars] = None
    is_loading: bool = False
    
    @rx.event
    async def get_car_details(self):
        self.is_loading = True
        try:
            with rx.session() as session:
                car_id = int(self.router.page.params.get("id", 0))
                self.car = session.get(Cars, car_id)
                if self.car is None:
                    return rx.redirect("/error")
        except Exception as e:
            print(f"Error getting car details: {e}")
            return rx.redirect("/error")
        finally:
            self.is_loading = False


class CondComplexState(rx.State):
    price: int = 0
    base_price: int = 0
    days: int = 1

    @rx.event
    async def get_price(self):
        car_state = await self.get_state(CarDetailState)
        if car_state.car:
            self.base_price = int(car_state.car.price)
            self.price = self.base_price
            self.days = 1
    
    @rx.event
    def increment_price(self):
        self.days += 1
        self.price = int(self.base_price) * int(self.days)
    @rx.event
    def decrement_price(self):
        if self.days > 1:  #* user cant rent car at 0 days
            self.days -= 1
            self.price = int(self.base_price) * int(self.days)
            
    @rx.event
    async def rent_car(self):
        #* take user data
        user_state = await self.get_state(UserData)
        car_state = await self.get_state(CarDetailState)
        #* check if user data is valid
        if car_state.car and user_state.username:
            #* save to DB
            with rx.session() as session:
                rental = CarRentalApp(
                    username=user_state.username,
                    car_id=str(car_state.car.id),
                    days=str(self.days),
                    phone=user_state.phone,
                    total_price=str(self.price),
                )
                session.add(rental)
                session.commit()
                return rx.redirect("/main")



def car_detail():
    return rx.box(
        rx.mobile_only(
            rx.container(
                topbar(CarDetailState.car.company),
            
            rx.cond(
                CarDetailState.is_loading,
                rx.center(rx.spinner()),
                rx.vstack(
                    image_zoom(
                        rx.image(
                            src=CarDetailState.car.image,
                            width="100%",
                            height="300px",
                            object_fit="cover"
                        ),
                        width="100%", 
                        height="300px",
                        style={
                            "[data-rmiz-modal-overlay]": {
                                "background": "black !important"
                            }
                        }
                    ),
                    #* car model | price
                    rx.box(
                            # model
                            rx.text(CarDetailState.car.car_model, font_size="35px"),
                            # price
                            rx.hstack(
                                rx.text(f"${CarDetailState.car.price}",font_size="35px"),
                                rx.text(
                                    "day", 
                                    color=LIGHT_GRAY,align_self="center",
                                    font_size="20px"
                                ),
                            ),
                        width="100%",
                        style={
                            "justify-content": "space-between",
                            "display": "flex",
                            "align-items": "center",
                            "align-self": "center",
                        }
                    ),
                    #* all other details
                    #! REMAKE CODE
                    rx.box(
                        rx.scroll_area(
                            rx.flex(
                            # HP
                            details_circle(
                                icon="circle-gauge",
                                text="H/P",
                                db_text=CarDetailState.car.horse_power
                            ),
                            # seats
                            # details_circle(
                            #     icon="seats",
                            #     text="Seats",
                            #     db_text=CarDetailState.car.seats
                            # ),
                            # doors
                            details_circle(
                                icon="user",
                                text="Doors",
                                db_text=CarDetailState.car.doors
                            ),
                            # acceleration to 100km/h
                            details_circle(
                                icon="gauge",
                                text="",
                                db_text=f"{CarDetailState.car.acceleration_to_100}s"
                            ),
                            # car length
                            details_circle(
                                icon="car",
                                text="Length",
                                db_text=CarDetailState.car.car_length
                            ),
                            # car width
                            details_circle(
                                icon="car-front",
                                text="Width",
                                db_text=CarDetailState.car.car_width
                            ),
                            # car height
                            details_circle(
                                icon="chevrons-up-down",
                                text="Height",
                                db_text=CarDetailState.car.car_height
                            ),
                            gap="10px"
                        #flex
                        ),
                            
                        # scroll_area
                        ),
                        scrollbars="horizontal",
                        
                        
                        width="100%",
                    ),
                    #* google map
                    rx.text("Location"),
                    rx.box(    
                        rx.el.iframe(
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.450089513704!2d-74.09158970502072!3d40.87055414044765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9ffca92fde1%3A0x331e2dac8b0921a3!2sElite%20SS%20Rentals%2C%20LLC!5e1!3m2!1sru!2sru!4v1738203653252!5m2!1sru!2sru",
                            width="100%",
                            height="",
                            style={"border": "0"},
                            allow_full_screen=True,
                            loading="lazy",
                            referrer_policy="no-referrer-when-downgrade",
                            border_radius="20px",
                        ),
                        
                        width="100%",
                        margin_bottom="20px",
                    ),
                    #* rent button
                    rx.dialog.root(
                    rx.dialog.trigger(
                        rx.button(
                            rx.text("Rent Now", font_size="20px"),
                            width="100%", 
                            height="60px",
                            align_self="center",
                            align_items="center",
                            background_color=YELLOW,
                            color="black", 
                            border_radius="30px",
                            padding="10px",
                        )
                    ),
                    rx.dialog.content(
                    rx.box(
                    rx.vstack(
                        rx.heading("Rental Details", font_size="24px", font_weight="bold", color=TEXT_COLOR),
                        rx.divider(border_color="rgba(255, 255, 255, 0.1)", margin_y="10px"),
                        rx.hstack(
                            rx.vstack(
                                rx.text("Days", font_size="14px", color="rgba(255, 255, 255, 0.7)"),
                                rx.hstack(
                                    rx.button(
                                        rx.icon(tag="calendar-arrow-down", color=ICON_COLOR),
                                        on_click=CondComplexState.decrement_price,
                                        background_color="rgba(255, 255, 255, 0.1)",
                                        border_radius="40px",
                                        padding="10px",
                                    ),
                                    rx.text(
                                        CondComplexState.days,
                                        font_size="20px",
                                        font_weight="bold",
                                        color=TEXT_COLOR,
                                    ),
                                    rx.button(
                                        rx.icon(tag="calendar-arrow-up", color=ICON_COLOR),
                                        on_click=CondComplexState.increment_price,
                                        background_color="rgba(255, 255, 255, 0.1)",
                                        border_radius="40px",
                                        padding="10px",
                                    ),
                                    align_items="center",
                                ),
                                align_items="center",
                            ),
                            rx.vstack(
                                rx.text("Total Price", font_size="14px", color="rgba(255, 255, 255, 0.7)"),
                                rx.text(
                                    f"${CondComplexState.price:,}",
                                    font_size="20px",
                                    font_weight="bold",
                                    color=TEXT_COLOR,
                                ),
                                align_items="center",
                            ),
                            justify="between",
                            width="100%",
                            padding_y="10px",
                        ),
                        rx.button(
                            rx.text("Rent Now", font_size="16px"),
                            width="100%",
                            padding="12px",
                            background_color=BUTTON_COLOR,
                            color="black",
                            border_radius="8px",
                            _hover={"background_color": BUTTON_HOVER},
                            margin_top="10px",
                            on_click=CondComplexState.rent_car,
                        ),
                        spacing="4",
                        align_items="center",
                        padding="20px",
                    ),
                    background=CARD_BACKGROUND,
                    border_radius="16px",
                    box_shadow=CARD_SHADOW,
                    width="100%",
                    padding="20px",
                    
                ),
                    background="rgba(0,0,0,0)",
                    ),
                    #* loading price to class to calc days
                    on_mount=CondComplexState.get_price,
                #rx.dialog.root
                )
                    
                
                ),
            ),
            on_mount=CarDetailState.get_car_details
        ),
            color="white"
        ),
    )