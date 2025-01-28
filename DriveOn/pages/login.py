import reflex as rx
import sqlite3
# from sqlalchemy import select
# from ..database import RegisterUser
from ..state import UserData
from ..ui.colors import *

from .register import inputs_style

class LoginUser (UserData):
    """State for handling login."""
    form_data: dict = {}
    error: str = ""

    @rx.event
    async def handle_submit(self, form_data: dict):
        """Handle form submission"""
        try:
            # Get form data
            mail = form_data.get("mail", "")
            username = form_data.get("username", "")
            password = form_data.get("password", "")
            

            # Connect to the database
            connection = sqlite3.connect('driveon.db') 
            cursor = connection.cursor()

            # Execute SQL query to find user
            cursor.execute("SELECT * FROM RegisterUser  WHERE username = ? AND mail = ?", (username, mail))
            user = cursor.fetchone()

            if user and user[3] == password:
                # Login successful - set user data and redirect
                self.set_user_data(
                    username=user[1], 
                    mail=user[2]
                )
                return rx.redirect("/main")
            else:
                return rx.toast.error("Invalid credentials")

        except Exception as e:
            print(f"Login error: {str(e)}")
            return rx.toast.error("Login error occurred")
        finally:
            # Close the database connection
            connection.close()


def login() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            # Background image
            rx.box(
                background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=2048:*')",
                background_size="cover",
                background_position="center",
                height="35vh",
                width="100%",
            ),
            # Login form
            rx.box(
                rx.box(
                    rx.text("Login ", color="white", font_size="30px"),
                    rx.text("To Take Your Car", color=YELLOW, font_size="30px", weight="bold"),
                    align_items="center",
                    align_self="center",
                    text_align="center",
                ),
                
                rx.form.root(
                    rx.center(
                        rx.vstack(
                            # Email input
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="mail", color="white"),
                                ),
                                name="mail",
                                placeholder="Email",
                                radius="large",
                                required=True,
                                style=inputs_style
                            ),
                            # Username input
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="user", color="white"),
                                ),
                                name="username",
                                placeholder="Username",
                                radius="large",
                                required=True,
                                style=inputs_style
                            ),
                            # Password input
                            rx.input(
                                rx.input.slot(
                                    rx.icon(tag="lock", color="white"),
                                ),
                                name="password",
                                type="password",
                                placeholder="Password", 
                                radius="large",
                                required=True,
                                style=inputs_style
                            ),
                            # Submit button
                            rx.button(
                                rx.text("Login"),
                                type="submit",
                                align_self="center",
                                align_items="center",
                                style={"width": "300px", "height": "50px", "font-size": "20px"},
                                background_color=YELLOW,
                                color="black",
                                border_radius="30px",
                            ),
                            gap="50px"
                        ),    
                    ),
                    style={"margin-top": "5%"},
                    on_submit=LoginUser.handle_submit,
                ),
            ),
            rx.center(
                rx.hstack(
                    rx.text("Don't have account?"),
                    rx.link("Register", href="/register", color=YELLOW),
                    color="white"
                ),
                style={"margin-top": "10%"}
            ),
        ),
    )