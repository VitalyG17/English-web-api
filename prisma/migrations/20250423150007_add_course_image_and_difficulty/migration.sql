/*
  Warnings:

  - Added the required column `difficulty` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'UPPERINTERMEDIATE', 'ADVANCED');

-- AlterTable
ALTER TABLE "course" ADD COLUMN     "difficulty" "Difficulty" NOT NULL,
ADD COLUMN     "imageUrl" TEXT;
