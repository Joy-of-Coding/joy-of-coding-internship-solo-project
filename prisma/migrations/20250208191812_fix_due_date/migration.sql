/*
  Warnings:

  - You are about to drop the column `title` on the `task` table. All the data in the column will be lost.
  - Added the required column `task` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `title`,
    ADD COLUMN `task` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `dueDate` DATETIME(3) NOT NULL,
    MODIFY `category` VARCHAR(191) NOT NULL;
