import { json } from "express";
import { pool } from "../db.js";

export const getInventarios = async (req, res) => {
  console.log("obteniendo inventarios");
  const [rows] = await pool.query("select * from inventario;");
  res.json({ rows });
};

export const getInventario = async (req, res) => {
  console.log(req.params.id);
  const { datoInventario } = req.params.id;
  const [rows] = await pool.query("SELECT * FROM inventario WHERE id=(?)", [
    req.params.id,
  ]);
  console.log(rows);
  res.json({ rows });

  // res.send(
  //   `El id del inventario es ${req.params.id} el resultado de base es ${resultado}`
  // );
};

export const postInventario = async (req, res) => {
  const { atributo1, atributo2 } = req.body;
  // TODA OPERACION CON LA BASE DE DATOS ES UNA OPERACION ASINCRONA
  const [rows] = await pool.query(
    "insert into inventario (atributo1,atributo2) value (?,?);",
    [atributo1, atributo2]
  );

  res.send({
    id: rows.insertId,
    atributo1: atributo1,
    atributo2: atributo2,
  });
};

export const putInventario = async (req, res) => {
  console.log("actualizando inventario");
  const { id } = req.params;
  const { atributo1, atributo2 } = req.body;
  console.log(id, atributo1, atributo2);
  const [result] = await pool.query(
    "UPDATE inventario SET atributo1=IFNULL(?,atributo1),  atributo2=IFNULL(?,atributo2) where id=(?);",
    [atributo1, atributo2, id]
  );
  console.log(result);
  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "inventario no encontrado",
    });

  const [rows] = await pool.query("SELECT * FROM inventario WHERE id=?;", [id]);
  // res.json(row)
  console.log(rows);

  res.send(
    `inventario actualizado: ${rows[0].atributo1} y ${rows[0].atributo2}`
  );

  // res.send(
  //   `el registro con id: ${id} tiene los siguientes datos \n atributo1: ${atributo1} \n atributo2: ${atributo2}`
  // );
};
export const deleteInventario = async (req, res) => {
  console.log("borrando inventario");
  console.log(req.params.id);
  // const { datoInventario } = req.params.id;
  const [rows] = await pool.query("DELETE FROM inventario WHERE id=(?)", [
    req.params.id,
  ]);
  console.log(rows);
  // res.json({ rows });

  res.send(`El inventario con id: ${req.params.id} fue borrado`);
};
