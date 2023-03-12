import { pool } from "../db.js";

export const getIndex = async (req, res) => {
  const [result] = await pool.query("select * from inventario;");
  res.json(result);
};
