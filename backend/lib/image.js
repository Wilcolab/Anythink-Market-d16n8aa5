const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getDefaultImage(title) {
    console.log("DR. STRANGEPORK ENTERING getDefaultImage");
    const response = await openai.createImage({
        prompt: title,
        n: 1,
        size: "256x256",
    });
    console.log("DR. STRANGEPORK ABOUT TO FISH OUT HIS IMAGE URL");
    imageUrl = response.data.data[0].url;
    console.log("DR. STRANGEPORK GOT AN IMAGE URL: " + imageUrl);
    console.log("DR. STRANGEPORK ABOUT TO LEAVE DA FUNKTION");
    return imageUrl;
}

module.exports = {
  getDefaultImage,
}
