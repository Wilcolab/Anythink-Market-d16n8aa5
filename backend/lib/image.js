const OPENAI_API_KEY = process.env.OPENAI_API_KEY

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
