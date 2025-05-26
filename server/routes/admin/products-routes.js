const express = require("express");
const upload = require("../../middleware/upload");

const {
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const router = express.Router();

router.post("/add", upload.single('image'), addProduct);
router.put("/edit/:id", upload.single('image'), editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);

module.exports = router;
