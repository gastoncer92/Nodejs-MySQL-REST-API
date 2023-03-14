import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";

const mysql = require("mysql");

// con este modulo puedes trabajar con promise
const { promisify } = require("util");

// crear la conexión a la base de datos
// export const pool = createPool({
//   host: DB_HOST,
//   user: DB_USER,
//   port: DB_PORT,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
// });
const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("Se perdio la coneccion con la base de datos");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.log("La base de datos tiene muchas conecciones");
    }
    if (err.code === "ECONNREFUSED") {
      console.log("Nuestra coneccion fue rechazada");
    }
  }
  if (connection) connection.release();
  console.log("La base esta conectada");
  return;
});

// Promisify Pool Query, convertimos en promesas lo que antes era CallBacks, y ahora podemos hacer consultas a la base de datos.
pool.query = promisify(pool.query);

module.exports = pool;
