const { newProduct, deleteProduct } = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const subCategoryId = req.body.subcategory_id;
      const newMenu = await newProduct(
        req.body.product_name,
        req.body.product_price,
        req.body.product_img,
        subCategoryId
      );
      res.status(200).json({ message: "New Products create" });
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE: async (req, res) => {
    try {
      const productId = req.body.product_id;
      const deleteMenu = await deleteProduct(productId);
      res.status(200).json({ message: "Deleted product" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
