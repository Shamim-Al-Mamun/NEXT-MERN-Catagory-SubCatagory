
require("dotenv").config();
const moongoose = require("mongoose");

//MongoBD connection
module.exports = async () => {
  
  const {MONGO_ATLAS_NM,MONGO_ATLAS_PW } = process.env;
  try {
    moongoose.connect(`mongodb+srv://${MONGO_ATLAS_NM}:${MONGO_ATLAS_PW}@cluster0.90uvvsv.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected Successfully`);
  } catch (err) {
    console.log(err);
  }
};