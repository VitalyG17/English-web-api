/*
  Warnings:

  - You are about to drop the `dailyActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userTestAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userTestProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wordStatistic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dailyActivity" DROP CONSTRAINT "dailyActivity_userId_fkey";

-- DropForeignKey
ALTER TABLE "userTestAnswer" DROP CONSTRAINT "userTestAnswer_taskId_fkey";

-- DropForeignKey
ALTER TABLE "userTestAnswer" DROP CONSTRAINT "userTestAnswer_userId_fkey";

-- DropForeignKey
ALTER TABLE "userTestProgress" DROP CONSTRAINT "userTestProgress_testId_fkey";

-- DropForeignKey
ALTER TABLE "userTestProgress" DROP CONSTRAINT "userTestProgress_userId_fkey";

-- DropForeignKey
ALTER TABLE "wordStatistic" DROP CONSTRAINT "wordStatistic_userId_fkey";

-- AlterTable
ALTER TABLE "test" ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "dailyActivity";

-- DropTable
DROP TABLE "userTestAnswer";

-- DropTable
DROP TABLE "userTestProgress";

-- DropTable
DROP TABLE "wordStatistic";

-- CreateTable
CREATE TABLE "user-test-progress" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "score" INTEGER,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "user-test-progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user-test-answer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,

    CONSTRAINT "user-test-answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "word-statistic" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "learnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "word-statistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily-activity" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "daily-activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user-test-progress_userId_testId_key" ON "user-test-progress"("userId", "testId");

-- CreateIndex
CREATE UNIQUE INDEX "user-test-answer_userId_taskId_key" ON "user-test-answer"("userId", "taskId");

-- CreateIndex
CREATE UNIQUE INDEX "daily-activity_userId_date_key" ON "daily-activity"("userId", "date");

-- AddForeignKey
ALTER TABLE "user-test-progress" ADD CONSTRAINT "user-test-progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user-test-progress" ADD CONSTRAINT "user-test-progress_testId_fkey" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user-test-answer" ADD CONSTRAINT "user-test-answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user-test-answer" ADD CONSTRAINT "user-test-answer_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "word-statistic" ADD CONSTRAINT "word-statistic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily-activity" ADD CONSTRAINT "daily-activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
