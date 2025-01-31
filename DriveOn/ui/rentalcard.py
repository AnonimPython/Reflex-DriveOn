import reflex as rx

def rental_card(
    id: int,
    username: str,
    days: str,
    phone: str,
    total_price: str,
    car_company: str,
    car_model: str, 
    car_id: str,
) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(f"ID: {id}", font_size="16px", font_weight="bold"),
            rx.text(f"Username: {username}", font_size="16px", font_weight="bold"),
            rx.link(
                rx.text(f"Car: {car_company} {car_model}", font_size="14px", color="blue", _hover={"text_decoration": "underline"}),
                href=f"/car/{car_id}",
            ),
            rx.text(f"Days: {days}", font_size="14px"),
            rx.text(f"Phone: {phone}", font_size="14px"),
            rx.text(f"Total Price: {total_price}", font_size="14px", color="green"),
            spacing="2",
        ),
        border="1px solid #e0e0e0",
        padding="15px",
        border_radius="8px",
        margin_bottom="10px",
        background="white",
        box_shadow="0px 4px 6px rgba(0, 0, 0, 0.1)",
    )