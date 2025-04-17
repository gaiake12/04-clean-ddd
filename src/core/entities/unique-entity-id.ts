import { randomUUID } from "node:crypto";

export class UniqueEntityID {
  private id: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }
}
