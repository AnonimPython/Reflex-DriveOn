import reflex as rx
from rxconfig import config
from sqlalchemy import select

from ..database import Support
from ..state import UserData
from ..ui.colors import *
from ..ui.navbar import navbar


class SupportState(rx.State):
    form_data: dict = {}
    
    @rx.event
    def handle_submit(self, form_data: dict):
        mail = form_data.get("mail", "")



def profile() -> rx.Component:
    return rx.box(
        rx.mobile_only(
            rx.box(
                # Background image
                rx.box(
                    background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://media.architecturaldigest.com/photos/5ced629704c41e1a9b9a8bcf/16:9/w_2560%2Cc_limit/Bugatti-LVN-7%2520%255BBugatti%255D.jpg')",
                    background_size="cover",
                    background_position="center",
                    height="35vh",
                    width="100%",
                ),
                # userdata
                rx.box(
                    rx.center(
                        rx.heading(UserData.username),
                        rx.text(UserData.mail),
                        flex_direction="column",
                    ),
                ),
                # support | call support
                rx.box(
                    rx.text("Support Team will help with your problem!", font_size="15px",align_items="center",align_self="center",text_align="center"),
                    rx.flex(
                        # form support
                        rx.box(
                            rx.alert_dialog.root(
                            rx.alert_dialog.trigger(
                                rx.button(
                                    rx.icon("message-circle-question", size=26),
                                    rx.text("Support", size="4"),
                                    width="65px",
                                    height="30px",
                                ),
                            ),
                            rx.alert_dialog.content(
                                rx.alert_dialog.title(
                                    "Write a message",
                                ),
                                rx.alert_dialog.description(
                                    "Need help? Write a message and we will contact you as soon as possible.",
                                ),
                                rx.form(
                                    rx.flex(
                                        rx.input(
                                            value=UserData.username, 
                                            placeholder="Your name",
                                            name="name",
                                            
                                        ),
                                        rx.input(
                                            value=UserData.mail,
                                            placeholder="Your mail",
                                            name="mail",
                                        ),
                                        rx.input(
                                            placeholder="Phone Number",
                                            name="phone",
                                        ),
                                        rx.flex(
                                            rx.alert_dialog.cancel(
                                                rx.button(
                                                    "Cancel",
                                                    variant="soft",
                                                    color_scheme="gray",
                                                ),
                                            ),
                                            rx.alert_dialog.action(
                                                rx.button(
                                                    "Submit", type="submit"
                                                ),
                                            ),
                                            spacing="3",
                                            justify="end",
                                        ),
                                        direction="column",
                                        spacing="4",
                                    ),
                                    on_submit=SupportState.handle_submit,
                                    reset_on_submit=True,
                                ),
                                max_width="450px",
                            ),
                        # rx.alert_dialog.root
                        )
                        ),
                    ),
                    margin_top="30px",
                ),
                # edit name
                rx.box(),
                
            ),
            
            navbar(),
            color="white",
        )
    )