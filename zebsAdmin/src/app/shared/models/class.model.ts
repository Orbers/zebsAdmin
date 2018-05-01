import { User } from "./user.model";
import { Lesson } from "./lesson.model";

export class Class {
  lessonTitle: Lesson[];
  students: User[];
  instructor: User;
  date: Date;
}
