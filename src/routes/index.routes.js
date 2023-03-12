import { Router } from "express";

import { getIndex } from "../controllers/index.controllers.js";
const router = Router();

router.all("/", (req, res) => {
  const titulo = "mi pagina";
  res.render("index", { titulo });
});

router.get("/about", (req, res) => {
  const titulo = "sobre nosotros";
  res.render("about", { titulo });
});

router.get("/ping", getIndex);

export default router;
