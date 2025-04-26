-- CreateEnum
CREATE TYPE "AchievementType" AS ENUM ('AVATAR_UPLOADED', 'DAYS_ACTIVE', 'WORDS_LEARNED', 'TESTS_COMPLETED', 'REGISTRATION');

-- AlterTable
ALTER TABLE "achivment" ADD COLUMN     "conditionValue" INTEGER,
ADD COLUMN     "type" "AchievementType";
