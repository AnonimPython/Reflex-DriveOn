import reflex as rx
from rxconfig import config


#* PAGES
from .pages.index import index
from .pages.main import main
# from .pages.car_detail import car_detail


from .pages.error import error_404
from .backend.add_car import add_car

#* .env file
from dotenv import load_dotenv
load_dotenv()


#* USER
@rx.page(route="/", title="Index")
def index_page() -> rx.Component:
    return index()

@rx.page(route="/main", title="Main")
def index_page() -> rx.Component:
    return main()

# @rx.page(route="/car/[id]")
# def car_detail_page():
#     return car_detail()


#* ADMIN
@rx.page(route="/add_car", title="Add Car")
def add_car_page() -> rx.Component:
    return add_car()

app = rx.App(
    #* global style
    style={"background": "black","font_family":"Funnel Display"},
    #* font
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
    ],
    theme=rx.theme(
        appearance="dark",
        has_background=True,
        radius="large",
        # accent_color="black",
    )
)
app.add_page(
    error_404,
    route="/404",
    title="404 - Page not found",
)
