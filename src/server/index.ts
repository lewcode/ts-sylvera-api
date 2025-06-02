import { prisma } from "../prisma/client";
import express, { type Request, type Response } from "express";

export const server = () => {
	const app = express();
	const port = 4000;

	app.get("/status", (_req: Request, res: Response) => {
		res.send("online");
	});

	app.get("/projects", async (_req: Request, res: Response) => {
		try {
			const projects = await prisma.projects.findMany();
			res.json(projects);
		} catch (error) {
			// Proper error handling and logging
			console.error("Error fetching projects:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	});

	app.listen(port, () => {
		console.log(`Sylvera api listening on port ${port}`);
	});
};
