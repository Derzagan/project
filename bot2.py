import telebot
import requests
import json

bot = telebot.TeleBot('6536570359:AAERZPBW2Y8ehk0xWOH3CoARKFnGTtpIFgU')

API = '563e4a08befe905b0d8d443c236fce8e'

@bot.message_handler(commands=['start'])

def start(message):
    bot.send_message(message.chat.id, "Hello which city?")



@bot.message_handler(content_types=['text'])

def get_weather(message):
    city = message.text.strip().lower()
    




    res = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric')
    if res.status_code == 200:
        data = json.loads(res.text)
        temp = data["main"]["temp"]
        bot.reply_to(message, f'wheather: {temp}')
        image = 'f2.jpg' if temp > 5.0 else 'f1.jpeg'
        file = open('./' + image, 'rb')
        bot.send_photo(message.chat.id, file)
    else:
        bot.reply_to(message, 'Enter correct city ')


    



bot.polling(none_stop=True)