import { Request, Response } from "express";

import logger from "../util/logger";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
    logger.info(`Received Request at: ${req.path} with body: ${JSON.stringify(req.body)}`);
    res.status(200).json({
        message: `Received Request at: ${req.path}`
    });
};
