export default async function handler(req, res) {
  const TOKEN = process.env.BOT_TOKEN;
  const TELEGRAM_API = `https://api.telegram.org/bot${7501137487:AAH7W3Cm6iivjoCBTvaS1-wAOFun85jf8cc}`;

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const body = req.body;

  if (body.message?.text === '/start') {
    const chatId = body.message.chat.id;

    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: 'Привет! Я твой бот на Vercel 🚀',
        reply_markup: {
          keyboard: [['Кнопка 1', 'Кнопка 2']],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      })
    });
  }

  res.status(200).send('OK');
}
