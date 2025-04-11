import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create answer", () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase();

  const answer = answerQuestionUseCase.execute({
    content: "Nova resposta",
    instructorId: "1",
    questionId: "2",
  });

  expect(answer.content).toEqual("Nova resposta");
});
