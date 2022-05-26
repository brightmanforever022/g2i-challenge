import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router"
import QuizCard from './QuizCard'
import { getQuestions } from '../../api'
import { IQuestionObject } from '../../types'
import '../../App.css'

const Quiz = () => {
  const [step, setStep] = useState(0)
  const [questions, setQuestions] = useState<IQuestionObject[]>([])
  const navigate = useNavigate();

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
      navigate(
        { pathname: '/result' },
        {
          state: questions,
          replace: true
        }
      )
    } else {
      setStep(nextStep)
    }
  }
  return (
    <div className='container'>
      {questions?.length > 0 &&
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
    </div>
  )
}

export default Quiz
