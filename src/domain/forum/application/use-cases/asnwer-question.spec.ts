import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })
  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'Nova resposta',
      instructorId: '1',
      questionId: '2',
    })

    expect(answer.content).toEqual('Nova resposta')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
