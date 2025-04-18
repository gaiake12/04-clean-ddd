import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

class Question extends Entity<QuestionProps> {}
