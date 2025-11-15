import { INote, Note } from "../../interfaces/entities";

export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    // This is where you write logic on how you get data from DB
    // Option 1: prisma.note.findMany()
    // Option 2: mongoose.find()
    // Option 3: SQL Raw `SELECT * FROM user`

    return [];
  }

  async getOneById(): Promise<Note> {
    return {
      id: "test123",
      content: "test",
      isDone: false,
    };
  }
}
