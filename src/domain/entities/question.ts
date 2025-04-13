import { randomUUID } from "node:crypto";
import { Slug } from "./values-objects/slug";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

class Question {
  id: string;
  public title: string;
  public content: string;
  public authorId: string;
  public slug: Slug;

  constructor({ title, content, authorId, slug }: QuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.authorId = authorId;
  }
}
