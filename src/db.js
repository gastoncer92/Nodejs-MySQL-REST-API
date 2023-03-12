import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config";
// crear la conexión a la base de datos
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});
