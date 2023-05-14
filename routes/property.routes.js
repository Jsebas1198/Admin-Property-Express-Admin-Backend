import express from "express";
import {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateroperty,
  deleteProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyDetail);
router.route("/").post(createProperty);
router.route("/:id").patch(updateroperty);
router.route("/:id").delete(deleteProperty);

export default router;
