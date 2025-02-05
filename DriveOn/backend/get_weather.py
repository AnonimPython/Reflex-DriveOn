import reflex as rx
import requests
import os
from dotenv import load_dotenv
load_dotenv()
def get_weather():
    city = "Moscow"
    global temp_C, weather
    
    try:
        weather_data = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&APPID={os.getenv('WEATHER_API_KEY')}",
            timeout=10
        )
        weather = weather_data.json()['weather'][0]['main']
        temp_F = round(weather_data.json()['main']['temp'])
        temp_C = round((temp_F - 32) / 1.8)
        return rx.hstack(
            rx.icon(tag="cloud"),
            rx.text(f"{city}",), 
            rx.text(f"{temp_C} °C",),
            color="white",
            text_align="center",
            align="center",
            align_items="center",
            margin_left="50%",
                                
        )
        
    except requests.exceptions.RequestException:
        weather = "N/A"
        temp_C = 0
        return rx.text(
            f"{city}"), rx.text(f"{weather} °C"
        )

