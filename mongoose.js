const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = process.env.ATLAS_URI;

async function mongooseConnect() {
  try {
    
    await mongoose.connect(mongoDB, () => {
      console.log('Atlas connected');
    }); 

  } catch (error) {
    throw error;
  }
}

module.exports = {
    mongooseConnect
};