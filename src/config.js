const PORT = process.env.PORT || 5000;
const PG = {
  connectionsElString:
    "postgres://mxyycscp:4215nq8eJ_1BFZ2DSnJcpGQh2LY2c00i@castor.db.elephantsql.com/mxyycscp",
  connectionString: "postgres://postgres:sarvar@localhost:5432/restaurants",
};

module.exports = {
  PORT,
  PG,
};
