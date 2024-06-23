# Project Management App

**Starter project GraphQL**
![image](https://github.com/vijayveera1989/graphql-project-management-board/assets/91021285/b7b09c77-e63f-4d84-896f-2203fd395fb9)

**Frontend**
    ReactJS,
    graphql,
    @apollo/client,
**Backend**
    NodeJS
    Express
    Express-Graphql
    Graphql
    Passport
    Mongoose

**Set up**

- Run `npm install --legacy-peer-deps` in the root of the project to install dependencies
- Access the application at `localhost:4000` in your browser

**Graphql Datatypes**
    GraphQLSchema
    GraphQLObjectType
    GraphQLList
    GraphQLID
    GraphQLString

Setting the graphql handler by passing the schema (i,e query and mutation)
` app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);`

