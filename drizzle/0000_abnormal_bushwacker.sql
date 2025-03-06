CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(9) NOT NULL,
	"password" varchar(15) NOT NULL,
	"email" varchar(10) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
