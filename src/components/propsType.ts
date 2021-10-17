export interface IQuestionObject {
  category: string,
  type: "boolean" | "multiple",
  difficulty: "easy" | "middle" | "hard",
  question: string,
  correct_answer: string,
  incorrect_answers: any[],
}

export interface IAnswerObject {
  category: string,
  correct: boolean,
}