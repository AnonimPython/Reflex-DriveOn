import reflex as rx
from typing import Optional, List
from sqlmodel import Field
from sqlalchemy import JSON, Column

#* CARS
class Cars(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    company: str = Field(default="")
    car_model: str = Field(default="")
    price: str = Field(default="")
    image: str = Field(default="")
    horse_power: int = Field(default="")
    car_length: int = Field(default="")
    car_width: int = Field(default="")
    car_height: int = Field(default="")
    seats: int = Field(default="4")
    doors: int = Field(default="4")
    acceleration_to_100: int = Field(default="")
    
    @property
    def url_tour(self) -> str:
        return f"/car/{self.id}"
    
    
#* REGISTER
class RegisterUser(rx.Model, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(min_length=3, max_length=50)
    mail: str
    password: str
    confirm_password: str

    