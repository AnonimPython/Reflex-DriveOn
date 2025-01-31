import reflex as rx
from typing import Optional, List
from sqlalchemy import Column, String, LargeBinary
from sqlmodel import Field
from sqlalchemy import JSON, Column

#* CARS
class Cars(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    company: str
    car_model: str 
    price: str
    image: str
    horse_power: str
    car_length: str
    car_width: str
    car_height: str
    seats: str
    doors: str
    acceleration_to_100: str

    @property 
    def url_car(self) -> str:
        return f"/car/{self.id}"
    
    
#* REGISTER
class RegisterUser(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(min_length=3, max_length=50)
    mail: str
    phone: str = Field(default="")
    password: str
    confirm_password: str
    
#* SUPPORT MASSAGE
class Support(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    mail: str
    username: str
    phone: str
    message: str
    
#* car rental application
class CarRentalApp(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    car_id: str
    days: str
    phone: str
    total_price: str