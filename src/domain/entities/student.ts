import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";

interface StudentProps {
  name: string;
}

class Student extends Entity<StudentProps> {}
