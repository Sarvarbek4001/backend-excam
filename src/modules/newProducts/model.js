const { fetch, fetchAll } = require("../../lib/postgres");

const NEW_PRODUCT = `
 INSERT INTO products(product_name,product_price,product_img,subcategory_id) VALUES($1,$2,$3,$4)
`;
const DELETE_PRODUCTS = `
  DELETE FROM products WHERE product_id=$1
`;

const newProduct = (product_name, product_price, product_img, subcategory_id) =>
  fetch(NEW_PRODUCT, product_name, product_price, product_img, subcategory_id);

const deleteProduct = (product_id) => fetch(DELETE_PRODUCTS, product_id);

module.exports = {
  newProduct,
  deleteProduct,
};
