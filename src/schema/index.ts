import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import 'graphql-import-node';
import typeDefs from './schema.graphql';
import resolvers from "../resolvers/resolversmap";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema;