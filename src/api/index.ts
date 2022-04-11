import { API_URL } from '../constants'

export const getQuestions = async () => {
  const response = await fetch(API_URL)
  const questionData = await response.json()

  return questionData.results
}
