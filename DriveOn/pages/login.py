import reflex as rx

from ..state import UserData
from ..ui.colors import *


class LoginUser(UserData):
    form_data: dict = {}
    
    @rx.event
    def handle_submit(self, form_data: dict):
        """Handle form submission and save to localStorage"""
        self.form_data = form_data
        
        # Get values from form
        mail = form_data["mail"]
        username = form_data["username"]
        
        # Save to localStorage through parent class method
        self.set_user_data(username=username, mail=mail)
    

inputs_style: dict = {
    "width": "300px",
    "height": "50px",
    "--text-field-focus-color": YELLOW,
    "background": "#414141",
    "color": "white",
    "& input::placeholder": {
        "color": "white"
    },
    "font-size": "20px",
}

def login() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            #* image
            rx.box(
                background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=2048:*')",
                background_size="cover",
                background_position="center",
                height="35vh",
                width="100%",
            ),
            rx.box(
                rx.box(
                    rx.text("Register ",color="white",font_size="30px"),
                    rx.text("To Take Your Car",color=YELLOW ,font_size="30px",weight="bold"),
                    align_items="center",
                    align_self="center",
                    text_align="center",
                ),
                
                rx.form.root(
                   rx.center(
                        
                        rx.vstack(
                            # mail
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="mail",color="white"),
                                ),
                                name="mail",
                                placeholder="Mail",
                                radius="large",
                                style=inputs_style
                            ),
                            # ! TEST
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="user",color="white"),
                                ),
                                name="username",
                                placeholder="usernameTEST",
                                radius="large",
                                style=inputs_style
                            ),
                            # !!!!
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="lock", color="white"),
                                ),
                                name="password", 
                                placeholder="Password",
                                radius="large",
                                style=inputs_style
                            ),
                            # ! make BD. For test I dont  use it
                            rx.button(
                                rx.text("Login"),
                                type="submit",
                                align_self="center",
                                align_items="center",
                                style={"width":"300px","height":"50px","font-size":"20px"},
                                background_color=YELLOW,
                                color="black",
                                border_radius="30px",
                            ),
                            gap="50px"
                        ),    
                    ),
                    style={"margin-top":"5%"},
                    on_submit=LoginUser.handle_submit,
                ), 
            ),
        ),
    ),