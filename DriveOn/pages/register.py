import reflex as rx
from cryptography.fernet import Fernet

from ..database import RegisterUser

from ..state import UserData
from ..ui.colors import *


class Register(rx.State):
    username: str = ""
    mail: str = ""
    password: str = ""
    confirm_password: str = ""
    

    @rx.event
    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        try:
            # Basic validation
            if form_data["password"] != form_data["confirm_password"]:
                return [
                    rx.set_value("password", ""),  # Clear password field
                    rx.set_value("confirm_password", ""),  # Clear confirm field
                    rx.toast.error("Passwords do not match")
                ]
            
            # connect Encrypt
            key = Fernet.generate_key()
            cipher_suite = Fernet(key)
            # Encrypt password
            password = cipher_suite.encrypt(form_data["password"].encode())
            confirm_password = cipher_suite.encrypt(form_data["confirm_password"].encode())
            # Create new user
            with rx.session() as session:
                new_user = RegisterUser(
                    username=form_data["username"],
                    mail=form_data["mail"],
                    password=password,
                    confirm_password=confirm_password
                )
                session.add(new_user)
                session.commit()
                
            # Clear form and redirect
            return rx.redirect("/main")
            
        except Exception as e:
            return rx.toast.error(str(e))
        
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
        
def register() -> rx.Component:
    return rx.box(
        rx.mobile_only(
        # register test and image
        #* image
            rx.box(
                background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.pinimg.com/736x/11/02/16/110216d5acf68a8e414d89479609c3b3.jpg')",
                background_size="cover",
                background_position="center",
                height="30vh",
                width="100%",
            ),
        # inputs
        rx.box(
            # ! in release change to rx.form()
            rx.form.root(
                   rx.center(
                        rx.vstack(
                            
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="user"),color="white",
                                ),
                                #! max 12 simbols
                                name="username",
                                placeholder="Username",
                                radius="large",
                                style=inputs_style,
                            ),
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="mail"),color="white",
                                ),
                                name="mail",
                                placeholder="Mail",
                                radius="large",
                                style=inputs_style,
                            ),
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="lock"),color="white",
                                ),
                                name="password",
                                id="password",
                                placeholder="Password",
                                radius="large",
                                style=inputs_style,
                            ),
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="shield-check"),color="white",
                                ),
                                name="confirm_password",
                                id="confirm_password",
                                placeholder="Confirm Password",
                                radius="large",
                                style=inputs_style,
                                border="red",
                            ),
                            # ! make BD. For test I dont  use it
                            rx.button(
                                rx.text("Register"),
                                type="submit",
                                align_self="center",
                                align_items="center",
                                style={"width":"300px","height":"50px","font-size":"20px"},
                                background_color=YELLOW,
                                color="black",
                            ),
                            gap="50px"
                        ),    
                    ),
                    style={"margin-top":"10%"},
                    on_submit=Register.handle_submit,
                ), 
                            
            ),
            
        ),
        rx.center(rx.hstack(rx.text("Have account?",),rx.link("Login", href="/login",color=YELLOW),color="white"),style={"margin-top":"10%"}),
        
    )
    