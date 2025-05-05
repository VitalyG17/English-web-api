/*
  Warnings:

  - Added the required column `difficulty` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" ADD COLUMN "difficulty" "Difficulty";

UPDATE "task" SET "difficulty" = 'ELEMENTARY';

ALTER TABLE "task" ALTER COLUMN "difficulty" SET NOT NULL;
