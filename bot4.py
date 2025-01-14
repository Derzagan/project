import telebot
import random

bot = telebot.TeleBot('7478119329:AAGYEylC4ALwpNkNzPP5n_iquf25GsbERSo')
attempts = 0
numberG = 0
limit = 10

@bot.message_handler(commands=['start'])
def guess(message):
    global numberG, attempts
    attempts = 0
    bot.send_message(message.chat.id, "Hello, enter for guess. From 1 to 100. Your limit 10")
    numberG = random.randint(1, 100)
    bot.register_next_step_handler(message, check)




def check(message):
    global numberG, attempts, limit
    try:
        player = int(message.text)
        attempts += 1
        if player > numberG:
            bot.send_message(message.chat.id, 'Number is less')
        elif player < numberG:
            bot.send_message(message.chat.id, 'Number is greater')
        else:
            bot.send_message(message.chat.id, 'You won')
            return
        
        if attempts < limit:
            bot.register_next_step_handler(message, check)
        else:
            bot.send_message(message.chat.id, f'You lose. You not have limit number its {numberG}')
    except ValueError:
        bot.send_message(message.chat.id, " Please, enter number ")
        bot.register_next_step_handler(message, check)
        

    
bot.polling(none_stop=True)

