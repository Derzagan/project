import telebot
from currency_converter import CurrencyConverter
from telebot import types

bot = telebot.TeleBot('6415817883:AAFBq3meWCF9VraWzij2JrstMZFrgd3Fi8g')

currency = CurrencyConverter()
amount = 0 

@bot.message_handler(commands=['start'])

def start(message):
    bot.send_message(message.chat.id, "Hello, enter amount")
    bot.register_next_step_handler(message, summa)

def summa(message):
    global amount
    try:
        amount = int(message.text.strip())
    except ValueError:
        bot.send_message(message.chat.id, "Enter correct number")
        bot.register_next_step_handler(message, summa)
        return
    
    if amount > 0:
        markup = types.InlineKeyboardMarkup(row_width=2)
        btn1 = types.InlineKeyboardButton('USD/EUR', callback_data='usd/eur')
        btn2 = types.InlineKeyboardButton('EUR/USD', callback_data='eur/usd')
        btn3 = types.InlineKeyboardButton('USD/GBP', callback_data='usd/gbp')
        btn4 = types.InlineKeyboardButton('Other', callback_data='else')
        markup.add(btn1,btn2,btn3,btn4)
        bot.send_message(message.chat.id, "Select a currency pair", reply_markup=markup)
    else:
        bot.send_message(message.chat.id, "the number must be greater than 0, enter amount")
        bot.register_next_step_handler(message, summa)


@bot.callback_query_handler(func=lambda call: True)
def callback(call):
    if call.data != 'else':
        values = call.data.upper().split('/')
        res = currency.convert(amount, values[0], values[1])
        bot.send_message(call.message.chat.id, f'result: {round(res, 2)}. You can enter the amount again')
        bot.register_next_step_handler(call.message, summa)
    else:
        bot.send_message(call.message.chat.id, 'Enter the pair using a slash')
        bot.register_next_step_handler(call.message, mucurrency)

def mucurrency(message):
    try:
        values = message.text.upper().split('/')
        res = currency.convert(amount, values[0], values[1])
        bot.send_message(message.chat.id, f'result: {round(res, 2)}. You can enter the amount again')
        bot.register_next_step_handler(message, summa)
    except Exception:
        bot.send_message(message.chat.id, f'Error.  Enter a again')
        bot.register_next_step_handler(message, mucurrency)


bot.polling(none_stop=True)