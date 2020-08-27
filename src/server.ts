import errorHandler from "errorhandler";

import app from "./app";
import logger from "./util/logger";

import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./schema";

const corsOptions = {
    origin: ["http://localhost:8080", "http://a2f6d33fa193d4a1e81af58334266425-0b3fb739bfeddcf6.elb.us-east-1.amazonaws.com"],
    credentials: true,
};

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

server.applyMiddleware({ 
    app,
    cors: corsOptions,
});

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    logger.info("  Press CTRL-C to stop\n");
});

export default server;
