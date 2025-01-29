import reflex as rx

from ..state import UserData
from sqlmodel import select,or_
from ..database import Cars
from typing import Optional

from ..pages.error import error_404


class CarDetailState(rx.State):
    #* Определяем переменную состояния tour типа Cars или None
    #* Optional[Cars] означает что переменная может быть либо объектом Cars, либо None
    #* None используется как начальное значение до загрузки данных
    сar: Optional[Cars] = None
    
    @rx.event
    async def get_tour_details(self):
        with rx.session() as session:
            
            #* Получаем id тура из параметров URL
            #* self.router.page.params - словарь с параметрами URL
            #* .get("pid", 0) - получаем значение параметра pid, если его нет - возвращаем 0
            #* int() - преобразуем строку в число потоскольку id тура в БД str 
            car_id = int(self.router.page.params.get("id", 0))

            #* Получаем объект тура из базы данных по его id
            #* session.get() - метод для получения одной записи по первичному ключу
            #* Cars - модель данных тура
            #* car_id - идентификатор нужного тура
            #* Результат сохраняется в переменную состояния self.tour
            self.сar = session.get(Cars, car_id)

def car_detail():
    return rx.box(
        rx.mobile_only(
            rx.text(f"{CarDetailState.сar.company}"),
        ),
    
    )