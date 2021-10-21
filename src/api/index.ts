import { URL } from '../constants'

export const getQuestions = async () => {
  const response = await fetch(URL)
  const questionData = await response.json()

  return questionData.results
}
