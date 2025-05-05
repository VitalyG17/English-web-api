-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN_US', 'RU_RU');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TaskType" ADD VALUE 'MULTIPLE_CHOICE';
ALTER TYPE "TaskType" ADD VALUE 'LISTING';

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "audioSrc" TEXT,
ADD COLUMN     "errorCount" INTEGER,
ADD COLUMN     "recognitionLang" "Language",
ALTER COLUMN "question" DROP NOT NULL;
