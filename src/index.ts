/**
 * Main application entry point
 */

import { server } from "./server";

const App = () => {
	try {
		server();

		process.on("SIGINT", async () => {
			console.log("\nReceived SIGINT, shutting down gracefully...");
			process.exit(0);
		});

		process.on("SIGTERM", async () => {
			console.log("\nReceived SIGTERM, shutting down gracefully...");
			process.exit(0);
		});
	} catch (error) {
		console.error("Failed to start application:", error);
		process.exit(1);
	}
}

App()
