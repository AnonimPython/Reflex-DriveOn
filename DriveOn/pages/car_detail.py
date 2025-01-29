import reflex as rx
from typing import Optional
from sqlmodel import select
from ..database import Cars

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
        rx.cond(
            CarDetailState.is_loading,
            rx.center(rx.spinner()),
            rx.vstack(
                rx.image(
                    src=CarDetailState.car.image,
                    width="100%",
                    height="300px",
                    object_fit="cover"
                ),
                rx.heading(CarDetailState.car.company),
                rx.heading(CarDetailState.car.car_model),
                rx.text(f"Price: ${CarDetailState.car.price}"),
                rx.divider(),
                rx.text(f"Horse power: {CarDetailState.car.horse_power}"),
                rx.text(f"Lengh: {CarDetailState.car.car_length} x {CarDetailState.car.car_width} x {CarDetailState.car.car_height}"),
                rx.text(f"Seats: {CarDetailState.car.seats}"),
                rx.text(f"Doors: {CarDetailState.car.doors}"),
                rx.text(f"100km/h in seconds: {CarDetailState.car.acceleration_to_100}"),
            ),
        ),
        on_mount=CarDetailState.get_car_details
    )