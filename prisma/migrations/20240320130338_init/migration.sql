-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isImportant" BOOLEAN NOT NULL DEFAULT false,
    "beginDate" DATETIME NOT NULL,
    "endDate" DATETIME
);
