import { NoteRepo } from "../infrastructure/database/note.repo";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../interfaces/types";
import { LoggerDev } from "../infrastructure/logger/logger.dev";

@injectable()
export class NoteService {
  private noteRepo: NoteRepo;
  private logger: LoggerDev;

  constructor(
    @inject(TYPES.NoteRepo) noteRepo: NoteRepo,
    @inject(TYPES.Logger) logger: LoggerDev
  ) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    // Business logic
    this.logger.info("User mengakses get All");
    return this.noteRepo.getAll();
  }

  getOneById(id: string) {
    // Add business logic here if necessary
    return this.noteRepo.getAll();
  }
}
