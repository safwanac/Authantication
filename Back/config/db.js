const { default: mongoose } = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://safwanac10:safwanac9656@cluster0.oz7oa0i.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlparser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connected");
  } catch (error) {
    console.log(`Error:${error}`);

    process.exit();
  }
};

module.exports = connectDB;
