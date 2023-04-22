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
    });
    return completion.data;
});