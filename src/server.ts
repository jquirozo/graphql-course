import express from "express";
import cors from "cors";
import schema from './schema'
import { ApolloServer } from 'apollo-server-express';
import { createServer } from "http";
// import { execute, subscribe } from "graphql";
// import { SubscriptionServer } from "subscriptions-transport-ws";
import expressPlayGround from 'graphql-playground-middleware-express';

(async function () {
    const app = express();
    app.use(cors());
    // const httpServer = createServer(app);
  
    const server = new ApolloServer({
      schema,
    });
    await server.start();
    server.applyMiddleware({ app });
  
    // SubscriptionServer.create(
    //   { schema, execute, subscribe },
    //   { server: httpServer, path: server.graphqlPath }
    // );
    app.get('/', expressPlayGround({
        endpoint: server.graphqlPath
    }));

    const httpServer = createServer(app);
    const PORT = 5300;
    httpServer.listen(PORT, () =>
      console.log(`Server is now running on http://localhost:${PORT}/graphql`)
    );
  })();