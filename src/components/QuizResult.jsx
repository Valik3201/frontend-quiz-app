import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

function QuizResult() {
  const { quizTitle } = useParams();
  const selectedQuiz = data.quizzes.find((quiz) => quiz.title === quizTitle);
  const navigate = useNavigate();

  const userScore = localStorage.getItem(`${quizTitle}-score`) || 0;

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <div>
      <img
        src={`/assets/${selectedQuiz.icon}`}
        alt={`${selectedQuiz.title} icon`}
      />
      <h2>{selectedQuiz.title}</h2>
      <h2>Quiz completed</h2>
      <p>
        You scored {userScore} out of {selectedQuiz.questions.length}
      </p>
      <img
        src={`/assets/${selectedQuiz.icon}`}
        alt={`${selectedQuiz.title} icon`}
      />
      <p>{selectedQuiz.title}</p>
      <button onClick={handlePlayAgain}>Play again</button>
    </div>
  );
}

export default QuizResult;
