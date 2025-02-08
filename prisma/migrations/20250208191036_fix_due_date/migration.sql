/*
  Warnings:

  - You are about to drop the column `task` on the `task` table. All the data in the column will be lost.
  - Added the required column `title` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `task`,
    ADD COLUMN `title` VARCHAR(255) NOT NULL,
    MODIFY `dueDate` DATE NOT NULL,
    MODIFY `category` TEXT NOT NULL;
