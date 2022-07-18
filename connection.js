import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL;

export const connection = async () => {
  await mongoose
    .connect(DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Conected to database`))
    .catch((err) => console.log(err));
};
