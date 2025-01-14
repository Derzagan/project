import telebot

bot = telebot.TeleBot('6485636301:AAGNA2VWeQW0oVFeRLDZOYV0YrhyPqCO8ZA')


@bot.message_handler(commands=['start'])

def start(message):
    bot.send_message(message.chat.id, " Enter number")

@bot.message_handler(func=lambda message: True)

def cal(message):
    x = message.text
    resulst = eval(x)
    bot.reply_to(message, f"answer {resulst}")









bot.polling(none_stop=True)