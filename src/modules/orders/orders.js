const { orders, newOrder } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allOrders = await orders();
      res.json(allOrders);
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const { order_products, order_data, order_time } = req.body;
      await newOrder(order_products, order_data, order_time);
      res.status(200).json({ message: "Ok" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
