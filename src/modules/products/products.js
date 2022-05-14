const { products, subProducts } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allProducts = await products();
      res.status(200).json(allProducts);
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const subCategoryId = req.body.subcategory_id;
      const menu = await subProducts(subCategoryId);
      res.status(200).json(menu);
    } catch (err) {
      console.log(err.message);
    }
  },
};
