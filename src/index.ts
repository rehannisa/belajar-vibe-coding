import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia();

app.get("/", () => {
  return "Welcome to ElysiaJS + Drizzle + MySQL!";
});

app.get("/db-check", async () => {
  try {
    const result = await db.select().from(users).limit(1);
    return { status: "success", data: result };
  } catch (error: any) {
    return { status: "error", message: error.message };
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
});
