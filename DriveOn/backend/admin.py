import reflex as rx
from ..ui.colors import *
from ..ui.admin_pannel import admin_pannel


from datetime import datetime

import asyncio

# Состояние для хранения текущего времени
class ClockState(rx.State):
    current_time: str = ""

    # Функция для обновления времени
    async def update_time(self):
        while True:
            self.current_time = datetime.now().strftime("%H:%M:%S")  # Формат времени: часы:минуты:секунды
            await asyncio.sleep(1)  # Обновление каждую секунду

    # Запуск обновления времени при загрузке страницы
    def on_load(self):
        return self.update_time()
        


def admin() -> rx.Component:
    return rx.box(
        rx.hstack(
            #* left
            rx.vstack(
                admin_pannel(),
                rx.text(ClockState.current_time, font_size="2em", font_weight="bold",color="white"),

            ),
            
            #* right
            
        ),
        background_color=ADMIN_BACKGROUND,
        height="100vh",
    )