import React from 'react'
import { useLocation } from 'react-router-dom'
import ResultItem from './ResultItem'
import { IQuestionObject } from '../../types'
import '../../App.css'

const Result: React.FC = () => {
  const location = useLocation();
  const answers = location.state as IQuestionObject[]
  const correctAnswers = answers.filter(answer => answer.isCorrect === true)

  return (
    <>
      <p className='header-title'>You scored <br />{correctAnswers.length} / {answers.length}</p>
      <ul className='result-list'>
        {answers.map(answer =>
          <ResultItem
            title={answer.question}
            isCorrect={answer?.isCorrect}
            key={answer.question}
          />
        )}
      </ul>
      <a href="/" className='start-link'>PLAY AGAIN?</a>
    </>
  )
}

export default Result
