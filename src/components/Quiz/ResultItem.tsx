import React from 'react'
import he from 'he'
import '../../App.css'

interface IResultItemProps {
  title: string,
  isCorrect: boolean | undefined,
}
const ResultItem: React.FC<IResultItemProps> = ({ title, isCorrect }) => {
  return (
    <li className={isCorrect ? 'active' : ''}>{he.decode(title).trim()}</li>
  )
}

export default ResultItem
