import React from 'react'
import he from 'he'

import { IQuestionObject } from '../propsType'
import '../../App.css'

interface QuizCardProps {
  quiz: IQuestionObject,
  hitAnswer: Function,
}

const QuizCard: React.FC<QuizCardProps> = (props: QuizCardProps) => {
  const { question } = props.quiz

  const setAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.hitAnswer(event.target.value)
  }
  return (
    <div className='card-container'>
      <p>{he.decode(question)}</p>
      <input type="radio" name="quiz-select" value="True" id="select-right" onChange={setAnswer} checked={false} />
      <label htmlFor="select-right">True</label>
      <input type="radio" name="quiz-select" value="False" id="select-wrong" onChange={setAnswer} checked={false} />
      <label htmlFor="select-wrong">False</label>
    </div>
  )
}

export default QuizCard
