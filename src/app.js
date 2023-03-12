import express from "express";
// import { pool } from "./db.js";
import inventarioRoute from "./routes/inventario.routes.js";
import indexRoute from "./routes/index.routes.js";

import fileDirName from "./file-dir-name.js";

const { __dirname, __filename } = fileDirName(import.meta);
// C:\cb\cb-js
console.log(__dirname);
// C:\cb\cb-js\index.js
console.log(__filename);

import path from "path";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));
app.use(express.json()); //para poder pasar json

// settings
//app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(indexRoute);
app.use("/api", inventarioRoute);

app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontro nada.",
  });
});

export default app;
