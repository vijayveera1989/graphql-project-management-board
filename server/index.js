const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config;
const schema = require("./schema/schema.js");
const connectDb = require("./config/db.js");

const { graphqlHTTP } = require("express-graphql");

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// set up 
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

connectDb();

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
