import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import Result from './Result'
import { getQuestions } from '../../api'
import { IQuestionObject } from '../propsType'
import '../../App.css'

const Quiz = () => {
  const [step, setStep] = useState(0)
  const [questions, setQuestions] = useState<IQuestionObject[]>([])
  const [resultShow, setResultShow] = useState(false)

  useEffect(() => {
    loadQuestions()
  }, [])

  const loadQuestions = async () => {
    const questions = await getQuestions()
    setQuestions(questions)
  }

  const hitAnswer = (answer: string) => {
    if (questions) {
      questions[step].isCorrect = questions[step].correct_answer === answer
    }
    const nextStep = step + 1
    if (questions?.length === nextStep) {
      setResultShow(true)
    } else {
      setStep(nextStep)
    }
  }
  return (
    <div className='container'>
      {questions?.length > 0 && !resultShow &&
        <div className='quiz-container'>
          <p className='header-title'>{questions[step].category}</p>
          <QuizCard
            quiz={questions[step]}
            hitAnswer={hitAnswer}
          />
          <span className='quiz-number'>
            {step + 1} / {questions?.length}
          </span>
        </div>
      }
      {resultShow && <Result answers={questions} />}
    </div>
  )
}

export default Quiz
