CREATE TABLE "infos" (
	"id" serial PRIMARY KEY NOT NULL,
	"FullName" text,
	"Email" text,
	"Image" varchar,
	"createdAt" text DEFAULT 'CURRENT_TIMESTAMP',
	CONSTRAINT "infos_Email_unique" UNIQUE("Email")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(9) NOT NULL,
	"password" varchar(15) NOT NULL,
	"confirm_password" varchar(20) NOT NULL,
	"email" varchar(25) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
