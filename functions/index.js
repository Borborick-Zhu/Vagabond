const functions = require('firebase-functions');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: functions.config().openai.key,
});
const openai = new OpenAIApi(configuration);

exports.getGPTResponse = functions.https.onCall(async (data, context) => {
    const text = data.text;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 256
    });
    return completion.data;
});