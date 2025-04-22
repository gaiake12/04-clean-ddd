import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {
    return;
  },
};

test("create answer", async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(
    fakeAnswersRepository
  );

  const answer = await answerQuestionUseCase.execute({
    content: "Nova resposta",
    instructorId: "1",
    questionId: "2",
  });

  expect(answer.content).toEqual("Nova resposta");
});
