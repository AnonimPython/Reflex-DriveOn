import reflex as rx
from typing import Optional
from sqlmodel import select
from ..ui.rentalcard import rental_card
from ..database import Cars, CarRentalApp


from sqlmodel import select, join

class GetAllRentals(rx.State):
    rentals: list[dict] = []
    
    @rx.event
    async def get_rentals(self):
        try:
            with rx.session() as session:
                #* query for join CarRentalApp and Cars DB tables
                query = (
                    select(
                        CarRentalApp.id,
                        CarRentalApp.username,
                        CarRentalApp.days,
                        CarRentalApp.phone,
                        CarRentalApp.total_price,
                        Cars.company,   #* car name
                        Cars.car_model, #* car model
                        Cars.id.label("car_id"),  #*  -> Cars.id AS car_id | car id in Cars DB
                    )
                    .join(Cars, CarRentalApp.car_id == Cars.id)  #* connect Car table to CarRentalApp table using id's
                    .order_by(CarRentalApp.id.desc()) #* grouping by decreasing 
                )
                results = session.exec(query).all()
                
                # Сохраняем данные в rentals
                self.rentals = [
                    {
                        "id": rental.id,  # ID обращения
                        "username": rental.username,
                        "days": rental.days,
                        "phone": rental.phone,
                        "total_price": rental.total_price,
                        "car_company": rental.company,  #* car name
                        "car_model": rental.car_model,  #* car model
                        "car_id": rental.car_id,  #* car id
                    }
                    for rental in results
                ]
        except Exception as e:
            print(f"[WARNING] Error getting rentals from DB: {e}")



def carapplication() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            
            rx.box(
                
                rx.vstack(
                    rx.heading("All Rentals", font_size="24px", font_weight="bold", margin_bottom="20px"),
                    rx.foreach(
                        
                        GetAllRentals.rentals, #* use JSON data from DB Cars and CarRentalApp
                        lambda rental: rental_card(
                            id=rental["id"],
                            username=rental["username"],
                            days=rental["days"],
                            phone=rental["phone"],
                            total_price=rental["total_price"],
                            car_company=rental["car_company"],   #* car name
                            car_model=rental["car_model"],       #* car model
                            car_id=rental["car_id"],             #* car id
                        )
                    ),
                    spacing="4",
                    padding="20px",
                ),
                on_mount=GetAllRentals.get_rentals, #* load data after page start
            ),
        )
    )