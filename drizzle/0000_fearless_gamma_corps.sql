CREATE TABLE `commentaires` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`auteur` text NOT NULL,
	`text` text NOT NULL,
	`haiku_id` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`haiku_id`) REFERENCES `haikus`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `haikus` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`titre` text NOT NULL,
	`auteur` text NOT NULL,
	`contenu` text NOT NULL,
	`icone_index` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `haikus_contenu_unique` ON `haikus` (`contenu`);