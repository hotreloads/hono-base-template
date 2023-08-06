import { Context, Next } from "hono";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { Database } from "../types";

export default async function dbMiddleware(c: Context, next: Next) {
	const dialect = new PostgresDialect({
		pool: new Pool({
			connectionString: c.env.CONNECTION_STRING,
			max: 10
		})
	});

	const db = new Kysely<Database>({ dialect });
	c.set("db", db);
	await next();
}
