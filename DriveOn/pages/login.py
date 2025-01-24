import reflex as rx
from cryptography.fernet import Fernet
from sqlalchemy import select

from ..database import RegisterUser
# from dotenv import load_dotenv
# load_dotenv()

from ..state import UserData
from ..ui.colors import *

class LoginUser(UserData):
    form_data: dict = {}
    
    @rx.event
    def handle_submit(self, form_data: dict):
        """Handle form submission"""
        try:
            # Get form data
            mail = form_data["mail"]
            username = form_data["username"]
            input_password = form_data["password"].encode()
            
            key = "OC2tpXHRlrlkI749I9rtfKEvXeDZyrzS1PJ8mo4W0tM="
            cipher_suite = Fernet(key)
            
            # Поиск пользователя
            with rx.session() as session:
                user = session.exec(
                    select(RegisterUser).filter(
                        (RegisterUser.username == username) | 
                        (RegisterUser.mail == mail)
                    )
                ).first()

            if user:
                try:
                    # Расшифровка и проверка
                    decrypted_password = cipher_suite.decrypt(user.password)
                    
                    if input_password == decrypted_password:
                        # Успешный вход
                        self.set_user_data(
                            username=user.username,
                            mail=user.mail
                        )
                        return rx.redirect("/main")
                    else:
                        return rx.toast.error("Invalid password")
                        
                except Exception as e:
                    print(f"Decryption error: {str(e)}")
                    return rx.toast.error("Error verifying password")
            else:
                return rx.toast.error("User not found")
                
        except Exception as e:
            print(f"Login error: {str(e)}")
            return rx.toast.error("Login error occurred")

        

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
                    rx.text("Login ",color="white",font_size="30px"),
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
            rx.center(rx.hstack(rx.text("Don't have account?",),rx.link("Register", href="/register",color=YELLOW),color="white"),style={"margin-top":"10%"}),
        ),
    ),