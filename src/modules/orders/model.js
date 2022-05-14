const { fetch, fetchAll } = require("../../lib/postgres");

const ORDERS = `
  SELECT
   *
  FROM 
    orders
`;

const NEW_ORDERS = `
    INSERT INTO orders(order_products,order_data,order_time)
     VALUES($1,$2,$3) 
     RETURNING *
`;

const orders = () => fetchAll(ORDERS);

const newOrder = (order_products, order_data, order_time) =>
  fetch(NEW_ORDERS, order_products, order_data, order_time);

module.exports = {
  orders,
  newOrder,
};
