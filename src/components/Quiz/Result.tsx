import React from 'react'
import ResultItem from './ResultItem'
import { IQuestionObject } from '../propsType'
import '../../App.css'

interface IResultProps {
  answers: IQuestionObject[]
}
const Result: React.FC<IResultProps> = ({ answers }) => {
  const correctAnswers = answers.filter(answer => answer.isCorrect === true)
  const reloadPage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    window.location.reload()
  }
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
      <a href="#" className='start-link' onClick={e => reloadPage(e)}>PLAY AGAIN?</a>
    </>
  )
}

export default Result
