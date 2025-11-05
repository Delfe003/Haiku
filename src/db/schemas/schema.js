import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const haikusTable = sqliteTable("haikus", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  titre: text("titre").notNull(),
  auteur: text("auteur").notNull(),
  contenu: text("contenu").notNull().unique(),
  iconeIndex: integer("icone_index").notNull(),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});

export const commentairesTable = sqliteTable("commentaires", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  auteur: text("auteur").notNull(),
  text: text("text").notNull(),
  haikuId: text("haiku_id")
    .references(() => haikusTable.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});


//importer de clavardag i guess que jen aurais bsoin quand je vais evoir faire un db.quiery
// export const messagesRelations = relations(messagesTable, ({ one }) => ({
//   auteur: one(usersTable, {
//     fields: [messagesTable.userId],
//     references: [usersTable.id],
//   }),
// }));

// export const usersRelations = relations(usersTable, ({ many }) => ({
//   publications: many(messagesTable),
// }));
