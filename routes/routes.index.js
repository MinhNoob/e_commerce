const express = require("express");
const usersRoutes = require("./users.routes");
const attributeRoutes = require("./attribute.routes");
const productRoutes = require("./product.routes");
const categoryRoutes = require("./category.routes");

const router = express.Router();

router.use("/users", usersRoutes);

router.use("/attribute", attributeRoutes);

router.use("/product", productRoutes);

router.use("/category", categoryRoutes);

module.exports = router;
