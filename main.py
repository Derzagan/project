import telebot
import webbrowser
from telebot import types

bot = telebot.TeleBot('7152931392:AAG82uisMDaHoZ0v3Wh718dLEbgtwbEC82A')

@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup()
    btn1 = types.KeyboardButton(" go site 🤩")
    markup.row(btn1)
    btn2 = types.KeyboardButton("delete")
    btn3 = types.KeyboardButton(" change text")
    markup.row(btn2, btn3)

    file = open('le.jpg', 'rb')
    bot.send_photo(message.chat.id, file, reply_markup=markup)
     # bot.send_message(message.chat.id, 'Hello', reply_markup=markup)
    bot.register_next_step_handler(message, on_click)

def on_click(message):
    if message.text == 'go site':
        bot.send_message(message.chat.id, 'Website is open')
    elif message.text == 'delete photo':
        bot.send_message(message.chat.id, 'delete')


@bot.message_handler(content_types=["photo"])
def get_photo(message):
    markup = types.InlineKeyboardMarkup()
    btn1 = types.InlineKeyboardButton(" go site", url='https://www.youtube.com/')
    markup.row(btn1)
    btn2 = types.InlineKeyboardButton("delete", callback_data='delete')
    btn3 = types.InlineKeyboardButton(" change text", callback_data='edit')
    markup.row(btn2, btn3)
    
    bot.reply_to(message, "good photo", reply_markup=markup)



@bot.callback_query_handler(func=lambda callback: True)
def callback_message(callback):
    if callback.data == 'delete':
        bot.delete_message(callback.message.chat.id, callback.message.message_id - 1)
    elif callback.data == 'edit':
        bot.edit_message_text('Edit text', callback.message.chat.id, callback.message.message_id)
    







bot.polling(none_stop=True)