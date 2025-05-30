import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>
  create(answerComment: AnswerComment): Promise<void>
  delete(questionComment: AnswerComment): Promise<void>
  findManyByAnswerId(
    answerId: string,
    page: PaginationParams,
  ): Promise<AnswerComment[]>
}
