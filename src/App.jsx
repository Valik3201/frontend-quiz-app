import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";

import GlobalContextProvider from "./context/globalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:quizTitle/question/:questionIndex"
            element={<QuizQuestion />}
          />
          <Route path="/:quizTitle/result" element={<QuizResult />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
