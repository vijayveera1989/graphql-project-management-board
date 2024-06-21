const express = require("express");
const app = express();
require("dotenv").config;
const schema = require("./schema/schema.js");
const connectDb = require("./config/db.js");

const { graphqlHTTP } = require("express-graphql");

// set up 
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
