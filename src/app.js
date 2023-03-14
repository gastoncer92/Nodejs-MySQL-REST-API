import express from "express";
// hola mundo
// import { pool } from "./db.js";
import inventarioRoute from "./routes/inventario.routes.js";
import indexRoute from "./routes/index.routes.js";
import fileDirName from "./file-dir-name.js";
//import path from "path";
// import ExpressHandlebars from "express-handlebars/dist/express-handlebars.js" as exphbs; // edit

//import exphbs = require('express-handlebars');

const { __dirname, __filename } = fileDirName(import.meta);
// C:\cb\cb-js
console.log(__dirname);
// C:\cb\cb-js\index.js
console.log(__filename);

import path, { join } from "path";

import morgan from "morgan";

// Inicialización
const app = express();

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   layoutsDir: path.join(app.get('views'), 'layouts'),
//   partialsDir: path.join(app.get('views'), 'partials'),
//   extname: '.hbs',
//   helpers: require('./lib/handlebars')
// }))

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); //para poder pasar json
app.use(express.urlencoded()); // nuevo video, para aceptar desde formulario los datos que mandan los usuarios

// Global variables
app.use((req, res, next) => {
  next();
});

// Routes
app.use(indexRoute);
app.use("/api", inventarioRoute); // los app.use necesitan un objeto de enrutador
app.use(require("./routes/authentication.routes"));
// Para que todas las rutas creadas les preceda '/cajas' se agrega como esta a contunuacion, para todo pedido debera ser realizado de la siguient manera '/cajas/', para que preceda
app.use("/cajas", require("./routes/cajas.routes"));

// public
app.use(express.static(path, join(__dirname, "public"))); // aca estan los archivos del cliente, el html, css, js

app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontro nada.",
  });
});

export default app;
