import reflex as rx
from typing import Optional
from sqlmodel import select
from ..database import Cars
from reflex_image_zoom import image_zoom
from ..ui.topbar import topbar
from ..ui.details_circle import details_circle

from ..ui.colors import *

#* .env file
import os
from dotenv import load_dotenv
load_dotenv()


# !!!!!!

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
                    rx.box(
                        rx.button(
                            rx.text("Rent Now",font_size="20px"),
                            width="100%",
                            height="60px",
                            align_self="center",
                            align_items="center",
                            
                            background_color=YELLOW,
                            color="black",
                            border_radius="30px",
                            padding="10px",
                        ),
                        width="100%",
                    ),
                ),
            ),
            on_mount=CarDetailState.get_car_details
        ),
            color="white"
        ),
    )