const OpenAI = require("openai");
const express = require('express');
const app = express();
const cors = require('cors'); 
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Se requiere un prompt' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You will be provided with a block of text, and your task is to extract a list of keywords from it."
        },
        {
          "role": "user",
          "content": prompt
        }
      ],
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1,
    });

    const message = response.data.choices[0].message.content;
    res.json({ message });
  } catch (error) {
    console.error('Error llamando a la API de OpenAI:', error);
    res.status(500).json({ error: 'Ocurrió un error al llamar a la API de OpenAI' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
