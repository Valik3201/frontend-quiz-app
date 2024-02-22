import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import ErrorMessage from "./ErrorMessage";

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

  const handleOptionChange = (e) => {
    const optionIndex = parseInt(e.target.id, 10);

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

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.disabled = true;
    });

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

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.checked = false;
      input.disabled = false;
    });

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
    <>
      <div>
        <div className="flex items-center gap-4 md:gap-6 text-xl font-medium">
          <img
            src={selectedQuiz.icon}
            alt={`${selectedQuiz.title} icon`}
            className="w-10 h-10 md:w-12 md:h-12 p-1.5 md:p-2 rounded-md md:rounded-lg bg-pure-white"
          />
          <h2>{selectedQuiz.title}</h2>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-7">
            <p className="text-base italic text-grey-navy dark:text-light-bluish select-all">
              Question {parseInt(questionIndex, 10) + 1} of{" "}
              {selectedQuiz.questions.length}
            </p>
            <p className="text-2xl font-medium max-w-[35rem]">
              {currentQuestion.question}
            </p>
          </div>
        </div>
      </div>

      <div className="text-base font-medium">
        <ul className="flex flex-col gap-3 mt-10 md:mt-16 lg:mt-0 lg:gap-6 w-full lg:w-[564px]">
          {shuffledOptions.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                id={index}
                name="option"
                className="hidden peer"
                onChange={handleOptionChange}
              />
              <label
                htmlFor={index}
                className="group inline-flex items-center gap-4 md:gap-8 w-full cursor-pointer bg-pure-white dark:bg-navy rounded-xl md:rounded-3xl p-3 lg:p-4 border-[3px] border-pure-white dark:border-navy transition duration-300 ease-in-out hover:border-purple peer-checked:border-purple shadow-light dark:shadow-dark"
              >
                <div
                  className={`transition duration-300 ease-in-out flex items-center justify-center bg-light-grey text-grey-navy w-10 h-10 md:w-12 md:h-12 p-1.5 md:p-2 rounded-md md:rounded-lg ${
                    selectedAnswer === index
                      ? "bg-purple text-pure-white"
                      : "group-hover:bg-[#f6e7ff] group-hover:text-purple"
                  }`}
                >
                  {String.fromCharCode(97 + index).toUpperCase()}
                </div>

                <div>{option}</div>
              </label>
            </li>
          ))}
        </ul>
        <button
          onClick={isAnswerSubmitted ? handleNextQuestion : handleSubmit}
          className="text-center p-4 lg:p-6 mt-4 md:mt-6 w-full cursor-pointer bg-purple text-pure-white rounded-xl md:rounded-3xl transition duration-300 ease-in-out transform shadow-light dark:shadow-dark hover:opacity-75"
        >
          {isAnswerSubmitted ? "Next question" : "Submit answer"}
        </button>
        {errorVisible && <ErrorMessage message={errorMessage} />}
      </div>
    </>
  );
}

export default QuizQuestion;
