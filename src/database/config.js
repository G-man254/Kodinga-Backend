import mongoose from "mongoose";

const CONNECTOR = process.env.MONGO_CONNECTION_STRING;

//connecting to our database

export const connectingDb = async () => {
  try {
    const connection = await mongoose.connect(CONNECTOR);
    if (connection) {
      console.log("Connected to the DB succesfully !");
    } else {
      console.log("unable to establish connection with the database");
    }
  } catch (error) {
    console.log(
      "An error ocurred while making the connection : ",
      error.message
    );
    process.exit(1);
  }
};
