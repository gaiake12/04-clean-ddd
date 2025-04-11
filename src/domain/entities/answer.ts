import { randomUUID } from "node:crypto";

export class Answer {
  public id: string;
  public content: string;
  public instructorId: string;
  public questionId: string;

  constructor(
    content: string,
    instructorId: string,
    questionId: string,
    id?: string
  ) {
    this.id = id ?? randomUUID();
    this.content = content;
    this.instructorId = instructorId;
    this.questionId = questionId;
  }
}
