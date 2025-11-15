import { NoteRepo } from "../infrastructure/database/note.repo";
import { LoggerDev } from "../infrastructure/logger/logger.dev";

export class NoteService {
  private noteRepo: NoteRepo;
  private logger: LoggerDev;

  constructor(noteRepo: NoteRepo, logger: LoggerDev) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    // Business logic
    this.logger.info("user mengambil getAll");
    return this.noteRepo.getAll();
  }

  getOneById(id: string) {
    // Add business logic here if necessary
    return this.noteRepo.getAll();
  }
}
