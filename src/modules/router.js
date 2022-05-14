const { Router } = require("express");
const router = new Router();

const Categories = require("./categories/categories");
const newSubCategories = require("./newSubCategories/newSubCategories");
const SubCategories = require("./subCategories/subCategories");
const Products = require("./products/products");
const NewProduct = require("./newProducts/newProducts");
const Orders = require("./orders/orders");
router
  .get("/categories", Categories.GET)
  .post("/categories", Categories.POST)
  .delete("/categories", Categories.DELETE)
  .get("/new_subcategories", newSubCategories.GET)
  .post("/new_subcategories", newSubCategories.POST)
  .get("/subcategories/:id", SubCategories.GET)
  .post("/subcategories", SubCategories.POST)
  .delete("/delete_subategory", SubCategories.DELETE)
  .get("/product", Products.GET)
  .post("/product", Products.POST)
  .post("/new_product", NewProduct.POST)
  .delete("/del_product", NewProduct.DELETE)
  .get("/orders", Orders.GET)
  .post("/orders", Orders.POST);

module.exports = router;
