import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import ErrorMessage from "./ErrorMessage";

import correctIcon from "../../assets/icon-correct.svg";
import incorrectIcon from "../../assets/icon-incorrect.svg";

function QuizQuestion() {
  const { quizTitle, questionIndex } = useParams();
  const selectedQuiz = data.quizzes.find((quiz) => quiz.title === quizTitle);
  const currentQuestion = selectedQuiz.questions[questionIndex];
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = [...currentQuestion.options];
    shuffled.sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [currentQuestion]);

  const handleOptionClick = (optionIndex) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(optionIndex);
    }
  };

  const addClassToOption = (index, className) => {
    const optionElement = document.querySelector(`li:nth-child(${index + 1})`);
    if (optionElement) {
      optionElement.classList.add(className);
    }
  };

  const handleSubmit = () => {
    setSelectedAnswer(null);
    setErrorVisible(false);

    if (selectedAnswer !== null) {
      const selectedOption = shuffledOptions[selectedAnswer];

      const isCorrect = selectedOption === currentQuestion.answer;

      setIsAnswerSubmitted(true);

      if (!isCorrect) {
        addClassToOption(selectedAnswer, "incorrect");
        addClassToOption(
          shuffledOptions.findIndex(
            (option) => option === currentQuestion.answer
          ),
          "correct"
        );
      } else {
        addClassToOption(selectedAnswer, "correct");
      }

      if (isCorrect) {
        if (correctAnswersCount + 1 <= selectedQuiz.questions.length) {
          setCorrectAnswersCount((prevCount) => prevCount + 1);
          localStorage.setItem(`${quizTitle}-score`, correctAnswersCount + 1);
        }
      }
    } else {
      setErrorMessage("Please select an answer");
      setErrorVisible(true);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = parseInt(questionIndex, 10) + 1;

    shuffledOptions.forEach((option, index) => {
      const optionElement = document.querySelector(
        `li:nth-child(${index + 1})`
      );
      if (optionElement) {
        optionElement.classList.remove("correct", "incorrect");
      }
    });

    if (nextQuestionIndex < selectedQuiz.questions.length) {
      setIsAnswerSubmitted(false);
      navigate(`/${quizTitle}/question/${nextQuestionIndex}`);
    } else {
      navigate(`/${quizTitle}/result`);
    }
  };

  return (
    <div>
      <img
        src={`/assets/${selectedQuiz.icon}`}
        alt={`${selectedQuiz.title} icon`}
      />
      <h2>{selectedQuiz.title}</h2>
      <p>
        Question {parseInt(questionIndex, 10) + 1} of{" "}
        {selectedQuiz.questions.length}
      </p>
      <p>{currentQuestion.question}</p>
      <ul>
        {shuffledOptions.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{
              cursor: "pointer",
              textDecoration: index === selectedAnswer ? "underline" : "none",
            }}
          >
            {String.fromCharCode(97 + index)} {option}
          </li>
        ))}
      </ul>
      <button onClick={isAnswerSubmitted ? handleNextQuestion : handleSubmit}>
        {isAnswerSubmitted ? "Next question" : "Submit answer"}
      </button>
      {errorVisible && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default QuizQuestion;
