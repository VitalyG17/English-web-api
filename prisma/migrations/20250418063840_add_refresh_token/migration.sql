/*
  Warnings:

  - Made the column `phoneNumber` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "hashedRefreshToken" TEXT,
ALTER COLUMN "phoneNumber" SET NOT NULL;
