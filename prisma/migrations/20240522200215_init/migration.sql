/*
  Warnings:

  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `phone` VARCHAR(10) NOT NULL;
