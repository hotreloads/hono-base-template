import { Hono } from "hono";
import { logger } from "hono/logger";
import { Kysely } from "kysely";
import dbMiddleware from "./middlewares/dbMiddleware";
import { Database } from "./types";

const app = new Hono<{ Variables: { db: Kysely<Database> } }>();
app.use("*", logger());
app.use("*", dbMiddleware);

app.get("/", async (c) => {
	const db = c.get("db");
	const users = await db.selectFrom("users").selectAll().execute();

	return c.json(users);
});

export default app;
