from aiogram import Bot, Dispatcher, executor, types
import config1




bot = Bot(config1.bot_token)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await bot.send_invoice(message.chat.id, ' Buy game', 'Buy Games', 'invoice', config1.p, 'USD', [types.LabeledPrice('Buy', 5 * 100)])

executor.start_polling(dp)