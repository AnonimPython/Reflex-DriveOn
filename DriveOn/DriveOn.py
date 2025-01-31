import reflex as rx
from rxconfig import config


#* PAGES
from .pages.index import index
from .pages.main import main
from .pages.login import login
from .pages.register import register
from .pages.profile import profile
from .pages.test import test
from .pages.car_detail import car_detail


from .pages.error import error_404
from .backend.add_car import add_car
from .backend.carapplication import carapplication

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

@rx.page(route="/login", title="Login")
def login_page() -> rx.Component:
    return login()

@rx.page(route="/register", title="Register")
def test_page() -> rx.Component:
    return register()

@rx.page(route="/profile", title="Profile")
def profile_page() -> rx.Component:
    return profile()

@rx.page(route="/car/[id]")
def car_detail_page():
    return car_detail()

@rx.page(route="/test", title="test")
def test_page() -> rx.Component:
    return test()

#* ADMIN
@rx.page(route="/add_car", title="Add Car")
def add_car_page() -> rx.Component:
    return add_car()

@rx.page(route="/carapplication", title="Car Application")
def carapplication_page() -> rx.Component:
    return carapplication()


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
