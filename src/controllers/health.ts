import { Request, Response } from "express";

/**
 * GET /health
 * Health page.
 */
export const index = (req: Request, res: Response) => {
    res.status(200).json({
        message: "I'm Healthy"
    });
};
