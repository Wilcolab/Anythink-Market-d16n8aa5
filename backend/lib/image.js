const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getDefaultImage(title) {
    const response = await openai.createImage({
        prompt: title,
        n: 1,
        size: "256x256",
    });
    imageUrl = response.data.data[0].url;
    return imageUrl;
}

module.exports = {
  getDefaultImage,
}
