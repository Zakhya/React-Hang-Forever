import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getSingleJob,
  createJob,
  deleteSingleJob,
  editSingleJob,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";

// router.get('/' getAllJobs)

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(validateJobInput, validateIdParam, editSingleJob)
  .delete(validateIdParam, deleteSingleJob);

export default router;
