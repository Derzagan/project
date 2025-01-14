from aiogram import Bot, Dispatcher, executor, types

bot = Bot('7152931392:AAG82uisMDaHoZ0v3Wh718dLEbgtwbEC82A')

dp = Dispatcher(bot)



@dp.message_handler(content_types=['photo'])
async def start(message: types.Message):
    # await message.answer('Hello')
    await message.reply('salam')
    


@dp.message_handler(commands=['inline'])
async def info(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('site', url='https://www.youtube.com/'))
    markup.add(types.InlineKeyboardButton('Hello', callback_data='hello'))
    await message.reply('salam', reply_markup=markup)



@dp.callback_query_handler()
async def callback(call):
    await call.message.answer(call.data)

@dp.message_handler(commands=['reply'])
async def reply(message: types.Message):
    markup = types.ReplyKeyboardMarkup(one_time_keyboard=True)
    markup.add(types.KeyboardButton('site'))
    markup.add(types.KeyboardButton('WEBsite'))
    await message.answer('Hello', reply_markup=markup)
    




executor.start_polling(dp)

