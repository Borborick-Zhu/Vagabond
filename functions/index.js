const functions = require('firebase-functions');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

exports.getGPTResponse = functions.https.onCall(async (data, context) => {
    const text = data.text;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 1024
    });
    return completion.data;
});