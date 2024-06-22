# Project Management App

**Starter project GraphQL**

**Frontend**
    ReactJS,
    graphql,
    @apollo/client,
**Backend**
   # NodeJS
   # Express
   # Express-Graphql
   # Graphql
   # Passport
   # Mongoose

**Set up**

- Run `npm install --legacy-peer-deps` in the root of the project to install dependencies
- Access the application at `localhost:4000` in your browser

**Graphql Datatypes**
   # GraphQLSchema
   # GraphQLObjectType
   # GraphQLList
   # GraphQLID
   # GraphQLString

# setting the graphql handler by passing the schema (i,e query and mutation)
` app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);`

