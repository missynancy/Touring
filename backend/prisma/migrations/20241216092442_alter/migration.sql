/*
  Warnings:

  - You are about to drop the column `image1` on the `Safaris` table. All the data in the column will be lost.
  - You are about to drop the column `image2` on the `Safaris` table. All the data in the column will be lost.
  - You are about to drop the column `image3` on the `Safaris` table. All the data in the column will be lost.
  - Added the required column `image` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Safaris` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Safaris" DROP COLUMN "image1",
DROP COLUMN "image2",
DROP COLUMN "image3",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "lowSeason" SET DATA TYPE TEXT,
ALTER COLUMN "peakSeason" SET DATA TYPE TEXT;
