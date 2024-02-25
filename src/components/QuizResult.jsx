import { useParams, useNavigate } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";
import QuizTitle from "./QuizTitle";

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
    <>
      <div className="flex justify-between items-center py-4 md:py-5 lg:py-10">
        <QuizTitle selectedQuiz={selectedQuiz} />
        <ThemeSwitcher />
      </div>

      <div className="flex justify-between w-full flex-wrap mt-8">
        <div className="flex flex-col gap-2 select-all">
          <h2 className="text-3xl md:text-4xl font-extralight">
            Quiz completed
          </h2>
          <p className="text-3xl md:text-4xl font-medium">You scored...</p>
        </div>

        <div className="w-full lg:w-[564px] mt-10 md:mt-16 lg:mt-0">
          <div className="flex flex-col items-center gap-3 md:gap-8 p-8 md:p-12 w-full lg:w-[564px] bg-pure-white dark:bg-navy rounded-xl md:rounded-3xl border-[3px] border-pure-white dark:border-navy shadow-light dark:shadow-dark ">
            <QuizTitle selectedQuiz={selectedQuiz} />

            <div className="flex flex-col justify-center items-start gap-4">
              <p className="text-5xl md:text-9xl font-medium">{userScore}</p>
              <p className="text-[1.12rem] md:text-lg text-grey-navy dark:text-light-bluish">
                out of {selectedQuiz.questions.length}
              </p>
            </div>
          </div>
          <button
            onClick={handlePlayAgain}
            className="text-center text-[1.12rem] md:text-xl font-medium p-3 md:p-8 mt-4 md:mt-6 w-full cursor-pointer bg-purple text-pure-white rounded-xl md:rounded-3xl transition duration-300 ease-in-out transform shadow-light dark:shadow-dark hover:opacity-75"
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizResult;
