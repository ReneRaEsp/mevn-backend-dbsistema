import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import router from "./routes";
import { connection } from "./connection";
import { startCors } from "./middlewares/cors";

dotenv.config();

//Environment variables
const PORT = process.env.PORT || 5000;

const main = async () => {
  const app = express();
  /**
   * Middlewares
   */
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + "/public"));
  //Start cors
  startCors(app);

  //Connect to database
  await connection();

  //Routes
  app.use("/api", router);

  app.listen(PORT, () => {
    console.log(`Escuchando desde el puerto ${PORT}`);
  });
};

main();
