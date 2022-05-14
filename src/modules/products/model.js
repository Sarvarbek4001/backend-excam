const { fetch, fetchAll } = require("../../lib/postgres");

const PRODUCTS = `
   SELECT 
     *
   FROM
    products
`;
const SUB_PRODUCTS = `
   SELECT 
     *
   FROM
    products
   WHERE
    subcategory_id = $1
`;

const products = () => fetchAll(PRODUCTS);
const subProducts = (subcategoryID) => fetchAll(SUB_PRODUCTS, subcategoryID);

module.exports = {
  products,
  subProducts,
};
