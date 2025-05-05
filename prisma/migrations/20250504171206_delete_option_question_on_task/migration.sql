/*
  Warnings:

  - The `question` column on the `task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "question",
ADD COLUMN     "question" TEXT[],
ALTER COLUMN "errorCount" SET DEFAULT 0;
