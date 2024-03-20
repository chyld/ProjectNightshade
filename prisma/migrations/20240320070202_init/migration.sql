-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "color" TEXT,
    "beginDate" DATETIME NOT NULL,
    "endDate" DATETIME
);
