import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionsRespository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(async () => {
    inMemoryQuestionsRespository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRespository)
  })

  it('should be able to find a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID('1'),
      slug: Slug.create('uma-pergunta'),
      title: 'Uma pergunta',
      content: 'Conteúdo da pergunta',
    })

    await inMemoryQuestionsRespository.create(newQuestion)

    const { question } = await sut.execute({ slug: 'uma-pergunta' })

    expect(question.id).toBeTruthy()
    expect(question).toEqual(newQuestion)
  })
})
