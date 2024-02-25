import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { SharedLayout } from "./components/SharedLayout";

import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </Router>
  );
}

export default App;
