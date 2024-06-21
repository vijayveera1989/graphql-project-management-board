const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");
const Project = require("../models/project");
const Client = require("../models/client");

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
      client:{
        type: ClientType,
        resolve(parentValue,args){
            return client.findById(parentValue.clientId)
        }
      }
    }),
  });


const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneno: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects:{
        type:new GraphQLList(ProjectType),
        resolve(){
            return Project.find()
        }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return Project.findById(parentValue.clientId)
      },
    },
    clients:{
        type:new GraphQLList(ClientType),
        resolve(){
            return Client.find();
        }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return Client.findById(args.id);
      },
    },
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
