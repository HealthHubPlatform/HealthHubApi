import errorHandler from "errorhandler";

import app from "./app";
import logger from "./util/logger";

import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./schema";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express Apollo server.
 */
const server = new ApolloServer({
    typeDefs,
    resolvers,
    logger: logger,
    playground: true,
    introspection: true,
});

server.applyMiddleware({ app });

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    logger.info("  Press CTRL-C to stop\n");
});

export default server;
