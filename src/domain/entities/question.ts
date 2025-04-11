import { randomUUID } from "node:crypto";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
}

class Question {
  id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor({ title, content, authorId }: QuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.title = title;
    this.content = content;
    this.authorId = authorId;
  }
}
