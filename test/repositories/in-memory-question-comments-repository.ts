import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public items: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }

  async delete(questionComment: QuestionComment) {
    const questionIndex = this.items.findIndex(
      (item) => item.id === questionComment.id,
    )

    this.items.splice(questionIndex, 1)
  }

  async findById(id: string) {
    const questionComment = this.items.find((item) => {
      console.log(item.id.toString())

      return item.id.toString() === id
    })

    if (!questionComment) {
      return null
    }

    return questionComment
  }
}
