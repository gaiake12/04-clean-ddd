import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override?: Partial<QuestionCommentProps>,
  id?: UniqueEntityID,
): QuestionComment {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      content: 'content-1',
      questionId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return questionComment
}
