const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose.connect(process.env.MONGODB_ATLAS);
  console.log("BASE DE DATOS ONLINE");
  try {
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};
