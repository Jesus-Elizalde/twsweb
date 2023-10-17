import { boolean, text, serial, pgTable } from "drizzle-orm/pg-core";

export const todods = pgTable("todos", {
  id: serial("id").primaryKey(),
  text: text("text"),
  completed: boolean("completed").default(false),
});
