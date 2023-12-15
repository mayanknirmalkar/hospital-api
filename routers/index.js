import express from "express"
import doctorRegister from "../controllers/doctorRegister.js"
import login from "../controllers/doctorLogin.js"
import patientRegister from "../controllers/patientRegister.js"
import getPatientReports from "../controllers/getPatientReports.js"
import getAllReports from "../controllers/getAllReports.js"
import patientReport from "../controllers/patientReport.js"
import getAccessToRoute from "../middlewares/getAccessToRoute.js"

const router = express.Router();

router.post("/doctors/register", doctorRegister);

router.post("/doctors/login", login);

router.post("/patients/register", patientRegister)

router.post("/patients/:id/create_report",getAccessToRoute, patientReport)

router.get("/patients/:id/all_reports",getAccessToRoute, getPatientReports)

router.get("/reports/:status",getAccessToRoute, getAllReports)

export default router