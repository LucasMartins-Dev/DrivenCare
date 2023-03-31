import { Router } from "express";
import appointmentsControllers from "../controllers/appointmentsControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const appointmentRoutes = Router()

appointmentRoutes.post('/newappointment', authMiddleware.authValidation,appointmentsControllers.newAppointment)

export default appointmentRoutes