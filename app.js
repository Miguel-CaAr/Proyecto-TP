const prompt = "Hola, ¿cómo estás?";
const apiKey = "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";
const url = "https://api.openai.com/v1/chat/completions";
const data = {
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.7,
};
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

async function chat() {
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const message = await response.json();
  console.log(message.choices[0].message.content);
}

chat();
