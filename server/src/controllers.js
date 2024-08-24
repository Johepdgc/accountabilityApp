const { OpenAI } = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Function to use OpenAI API
async function getOpenAIResponse(prompt) {
    const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150,
    });
    return response.choices[0].text.trim();
}