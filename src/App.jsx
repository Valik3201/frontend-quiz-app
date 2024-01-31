import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f6fa;
`;

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
