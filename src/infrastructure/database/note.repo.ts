import { INote } from "../../interfaces/entities";
import { Note } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    // This is where you write logic on how you get data from DB
    // Option 1: prisma.note.findMany()
    // Option 2: mongoose.find()
    // Option 3: SQL Raw `SELECT * FROM user`

    return await prisma.note.findMany();
  }

  async getOneById(id: number): Promise<Note | null> {
    return await prisma.note.findFirst({
      where: {
        id,
      },
    });
  }
}
