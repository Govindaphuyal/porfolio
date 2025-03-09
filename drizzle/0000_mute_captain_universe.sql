CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(25) NOT NULL,
	"password" varchar(60) NOT NULL,
	"email" varchar(60) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "infos" (
	"id" serial PRIMARY KEY NOT NULL,
	"FullName" text,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"Image" varchar,
	"createdAt" text DEFAULT 'CURRENT_TIMESTAMP'
);
