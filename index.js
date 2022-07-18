import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();

//Variables de entorno
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

//Conexion a la base de datos MongoDB
mongoose.Promise = global.Promise;

mongoose
  .connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`conectado a la BD`))
  .catch((err) => console.log(err));

const app = express();

app.use(morgan("dev"));
app.use(cors());
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
});
