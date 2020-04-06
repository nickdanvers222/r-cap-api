const identifyImage = async (imageData) => {
  const Clarifai = require('clarifai');
  const app = new Clarifai.App({
      apiKey: process.env.CLARIFAI_KEY
  });

  let results = await app.models.predict('bd367be194cf45149e75f01d59f77ba7', {base64: imageData})
  .then((response) => response.outputs[0].data.concepts )
  .catch((err) => console.log(err))
  return results;
};

module.exports = identifyImage;