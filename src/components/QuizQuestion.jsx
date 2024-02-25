import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "./Button";
import ProgressBar from "./ProgressBar";
import ErrorMessage from "./ErrorMessage";
import ThemeSwitcher from "./ThemeSwitcher";
import QuizTitle from "./QuizTitle";

import data from "../data/data.json";

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
    setErrorVisible(false);

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    if (selectedAnswer !== null) {
      radioInputs.forEach((input) => {
        input.disabled = true;
      });
    }

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
    setSelectedAnswer(null);

    const nextQuestionIndex = parseInt(questionIndex, 10) + 1;

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.checked = false;
      input.disabled = false;
    });

    shuffledOptions.forEach((_option, index) => {
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

  const progress =
    ((parseInt(questionIndex, 10) + 1) / selectedQuiz.questions.length) * 100;

  return (
    <>
      <div className="flex justify-between items-center py-4 md:py-5 lg:py-10">
        <QuizTitle selectedQuiz={selectedQuiz} />
        <ThemeSwitcher />
      </div>

      <div className="flex justify-between flex-wrap">
        <div className="flex w-full lg:w-auto flex-col justify-between max-h-[416px]">
          <div className="flex flex-col gap-7 mb-6 md:mb-10 lg:mb-0">
            <p className="text-[0.88rem] md:text-base italic text-grey-navy dark:text-light-bluish select-all">
              Question {parseInt(questionIndex, 10) + 1} of{" "}
              {selectedQuiz.questions.length}
            </p>

            <p className="text-base md:text-2xl font-medium max-w-[35rem]">
              {currentQuestion.question}
            </p>
          </div>

          <ProgressBar progress={progress} />
        </div>
        <motion.div
          className="w-full lg:w-[564px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0 } }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <ul className="flex flex-col gap-3 lg:gap-6 mt-10 md:mt-16 lg:mt-0 text-[1rem] md:text-base font-medium ">
            {shuffledOptions.map((option, index) => (
              <li key={index} className="group">
                <input
                  type="radio"
                  id={index}
                  name="option"
                  className="hidden peer"
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor={index}
                  className={`inline-flex items-center justify-between w-full cursor-pointer bg-pure-white dark:bg-navy rounded-xl lg:rounded-3xl p-2 lg:p-4 border-[3px] border-pure-white dark:border-navy transition duration-300 ease-in-out shadow-light dark:shadow-dark ${
                    selectedAnswer === index && isAnswerSubmitted
                      ? "group-[.correct]:border-green group-[.incorrect]:border-red"
                      : "peer-checked:border-purple"
                  }`}
                >
                  <div className="inline-flex items-center gap-4 md:gap-8">
                    <div
                      className={`transition duration-300 ease-in-out flex items-center justify-center  w-10 h-10 md:min-w-12 md:min-h-12 p-1.5 md:p-2 rounded-md lg:rounded-lg ${
                        selectedAnswer === index
                          ? isAnswerSubmitted
                            ? "group-[.correct]:bg-green group-[.correct]:text-pure-white group-[.incorrect]:bg-red group-[.incorrect]:text-pure-white"
                            : "bg-purple text-pure-white"
                          : "bg-light-grey text-grey-navy group-hover:bg-[#f6e7ff] group-hover:text-purple"
                      }`}
                    >
                      {String.fromCharCode(97 + index).toUpperCase()}
                    </div>

                    <div>{option}</div>
                  </div>

                  <img
                    src="/assets/icon-correct.svg"
                    alt="Correct Icon"
                    className="hidden group-[.correct]:block w-8 h-8 md:w-10 md:h-10"
                  />
                  <img
                    src="/assets/icon-incorrect.svg"
                    alt="Incorrect Icon"
                    className="hidden group-[.incorrect]:block w-8 h-8 md:w-10 md:h-10"
                  />
                </label>
              </li>
            ))}
          </ul>

          <Button
            onClick={isAnswerSubmitted ? handleNextQuestion : handleSubmit}
          >
            {isAnswerSubmitted ? "Next question" : "Submit answer"}
          </Button>
          {errorVisible && <ErrorMessage message={errorMessage} />}
        </motion.div>
      </div>
    </>
  );
}

export default QuizQuestion;
