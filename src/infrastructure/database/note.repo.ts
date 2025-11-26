import { INote, Note } from "../../interfaces/entities";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    // This is where you write logic on how you get data from DB
    // Option 1: prisma.note.findMany()
    // Option 2: mongoose.find()
    // Option 3: SQL Raw `SELECT * FROM user`

    return [
      {
        id: "test123",
        content: "test",
        isDone: false,
      },
    ];
  }

  async getOneById(): Promise<Note> {
    return {
      id: "test123",
      content: "test",
      isDone: false,
    };
  }
}
