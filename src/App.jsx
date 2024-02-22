import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path=":quizTitle/question/:questionIndex"
            element={<QuizQuestion />}
          />
          <Route path=":quizTitle/result" element={<QuizResult />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
