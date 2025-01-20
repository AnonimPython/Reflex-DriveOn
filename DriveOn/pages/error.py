
import reflex as rx



def error_404() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.heading(
                "404",
                font_size="-2em",
                background="linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                background_clip="text",
                color="transparent",
                font_weight="bold"
            ),
            rx.text(
                "Page not found",
                font_size="1.5em",
                color="#4A5568",
                margin_top="1em"
            ),
            rx.text(
                "Sorry, we cannot find the page you are looking for.",
                color="#718096",
                margin_top="0.5em"
            ),
            padding="2em",
        ),
        rx.button(
            "Go back",
            on_click=rx.redirect("/tours"),
            color_scheme="blue",
            size="3",
            margin_top="2em",
            variant="solid",
        ),
        align="center",
        justify="center",
        min_height="100vh",
        spacing="2",
        background="radial-gradient(circle at center, #F7FAFC, #EDF2F7)",
    )