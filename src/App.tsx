import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import PageLayout from './components/common/PageLayout'
import Home from './components/Home'
import Quiz from './components/Quiz/Index'
import Result from './components/Result/Index'

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}

export default App
