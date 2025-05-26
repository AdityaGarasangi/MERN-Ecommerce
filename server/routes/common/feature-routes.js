const express = require("express");
const upload = require("../../middleware/upload");

const {
  addFeatureImage,
  getFeatureImages,
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", upload.single('image'), addFeatureImage);
router.get("/get", getFeatureImages);

module.exports = router;
