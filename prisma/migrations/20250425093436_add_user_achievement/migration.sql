/*
  Warnings:

  - You are about to drop the column `userId` on the `achivment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "achivment" DROP CONSTRAINT "achivment_userId_fkey";

-- AlterTable
ALTER TABLE "achivment" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "user-achivment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "achievementId" INTEGER NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user-achivment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user-achivment_userId_achievementId_key" ON "user-achivment"("userId", "achievementId");

-- AddForeignKey
ALTER TABLE "user-achivment" ADD CONSTRAINT "user-achivment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user-achivment" ADD CONSTRAINT "user-achivment_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "achivment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
