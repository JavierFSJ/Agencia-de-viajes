import express from "express";
import {
  inicio,
  nosotros,
  contacto,
  testimoniales,
  viajes,
  viajeDetalle,
} from "../controllers/homeController.js";
import { testimonialStore } from "../controllers/testimonialController.js";
const router = express.Router();

/* Rutas */
router.get("/", inicio);
router.get("/nosotros", nosotros);
router.get("/contacto", contacto);
router.get("/testimoniales", testimoniales);
router.post("/testimoniales", testimonialStore);
router.get("/viajes", viajes);
router.get("/viajes/:viaje", viajeDetalle);

export default router;
