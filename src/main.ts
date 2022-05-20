import { Server } from "./server";

try {
  new Server().listen();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  process.exit(1);
}

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});
