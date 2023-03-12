import { Router } from "express";
import {
  getInventarios,
  getInventario,
  postInventario,
  putInventario,
  deleteInventario,
} from "../controllers/inventario.controllers.js";

const router = Router();

router.get("/inventario", getInventarios);

router.get("/inventario/:id", getInventario);

router.post("/inventario", postInventario);

router.patch("/inventario/:id", putInventario);

router.delete("/inventario/:id", deleteInventario);

export default router;
