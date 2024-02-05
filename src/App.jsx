import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import Home from "./pages/Home";
import QuizQuestion from "./components/QuizQuestion";
import QuizResult from "./components/QuizResult";

import GlobalContextProvider from "./context/globalContext";
import { GlobalContext } from "./context/globalContext";
import Layout from "./components/Layout";

function App() {
  return (
    <GlobalContextProvider>
      <Layout>
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
      </Layout>
    </GlobalContextProvider>
  );
}

export default App;
