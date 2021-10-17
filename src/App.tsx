import React, { useEffect, useState } from 'react';
import { getQuestions } from "./api";
import { IQuestionObject, IAnswerObject } from './components/propsType';
import './App.css';

const App = () => {
  const [step, setStep] = useState(0);
  const [question, setQuestions] = useState<IQuestionObject[]>();

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const questions = await getQuestions();
    console.log('questions: ', questions);

    setQuestions(questions);
  }
  return (
    <div className="App">
      this is on dev.
    </div>
  );
};

export default App;
