/*
  Warnings:

  - Made the column `errorCount` on table `task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "task" ALTER COLUMN "errorCount" SET NOT NULL;
