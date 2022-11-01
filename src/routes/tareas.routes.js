import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);

router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put(editarTarea)
  .delete(borrarTarea);

export default router;

// app.get("/tareas", (req, res) => {
//     res.send("Aqui tengo que retornar una lista de tareas");
//   });
//   app.post("/tareas", (req, res) => {
//     res.send("retornar un objeto");
//   });
//   app.get("/tareas2", (req, res) => {
//     res.send("Aqui devolvemos una tarea");
//   });
