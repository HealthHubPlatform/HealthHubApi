import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as indexController from "./controllers";
import * as healthController from "./controllers/health";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 8080);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", indexController.index);
app.get("/health", healthController.index);

export default app;
