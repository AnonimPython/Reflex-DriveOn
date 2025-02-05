import reflex as rx
from ..ui.colors import *
from ..ui.admin_pannel import admin_pannel
from ..backend.get_weather import get_weather

from typing import List
from ..database import Cars


class AddCarState(rx.State):
    company: str
    car_model: str
    price: int
    image: str
    horse_power: int
    car_length: int
    car_width: int
    car_height: int
    seats: int
    doors: int
    acceleration_to_100: int
    
    
    
    @rx.event
    def handle_submit(self, form_data: dict):
        with rx.session() as session:
            # beach_value = form_data.get("beach", False)
            new_tour = Cars(
                company=form_data["company"],
                car_model=form_data["car_model"],
                price=form_data["price"],
                image=form_data["image"],
                horse_power=form_data["horse_power"],
                car_length=form_data["car_length"],
                car_width=form_data["car_width"],
                car_height=form_data["car_height"],
                seats=form_data["seats"],
                doors=form_data["doors"],
                acceleration_to_100=form_data["acceleration_to_100"],
            )
            session.add(new_tour)
            session.commit()
            # clear list
            # self.selected_meals = []
            return [
                rx.toast.success("Success"),
                rx.set_value("company", ""),
                rx.set_value("car_model", ""),
                rx.set_value("price", ""),
                rx.set_value("image", ""),
                rx.set_value("horse_power", ""),
                rx.set_value("car_length", ""),
                rx.set_value("car_width", ""),
                rx.set_value("car_height", ""),
                rx.set_value("seats", ""),
                rx.set_value("doors", ""),
                rx.set_value("acceleration_to_100", ""),
            ]

def add_car():
    return rx.box(
        rx.hstack(
            rx.vstack(
                admin_pannel(),
                get_weather(),
            ),
        
            rx.heading("Add Car"),
            rx.form(
                rx.vstack(
                    rx.input(placeholder="company", name="company",id="company"),
                    rx.input(placeholder="car_model", name="car_model",id="car_model"),
                    rx.input(placeholder="price", name="price",id="price"),
                    rx.input(placeholder="image", name="image",id="image"),
                    rx.input(placeholder="horse_power", name="horse_power",id="horse_power"),
                    rx.input(placeholder="car_length", name="car_length",id="car_length"),
                    rx.input(placeholder="car_width", name="car_width",id="car_width"),
                    rx.input(placeholder="car_height", name="car_height",id="car_height"),
                    rx.input(placeholder="seats", name="seats",id="seats"),
                    rx.input(placeholder="doors", name="doors",id="doors"),
                    rx.input(placeholder="acceleration_to_100", name="acceleration_to_100",id="acceleration_to_100"),
                    
                    
                    
                    rx.button("Add Car", type="submit"),
                    spacing="4",
                ),
                on_submit=AddCarState.handle_submit,
            )
        ),
        background_color=ADMIN_BACKGROUND,
        height="100vh",
        color="white",
)