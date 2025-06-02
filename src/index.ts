/**
 * Main application entry point
 */

import { server } from "./server";

// Main execution
async function main(): Promise<void> {
	// const app = new Application();

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

// Run the application
if (require.main === module) {
	main().catch((error) => {
		console.error("Unhandled error:", error);
		process.exit(1);
	});
}
