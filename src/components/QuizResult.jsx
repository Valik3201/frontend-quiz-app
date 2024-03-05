import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";
import { selectTitle, selectScore } from "../redux/quizSelectors";
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";
import QuizTitle from "./QuizTitle";
import data from "../data/data.json";

function QuizResult() {
  const dispatch = useDispatch();
  const quizTitle = useSelector(selectTitle);

  const selectedQuiz = data.quizzes.find((quiz) => quiz.title === quizTitle);

  console.debug(selectedQuiz);

  const userScore = useSelector(selectScore);

  const handlePlayAgain = () => {
    dispatch(resetQuiz());
  };

  return (
    <>
      <div className="flex justify-between items-center py-4 md:py-5 lg:py-10">
        <QuizTitle selectedQuiz={selectedQuiz} />
        <ThemeSwitcher />
      </div>

      <motion.div
        className="flex justify-between w-full flex-wrap mt-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0, transition: { duration: 0 } }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
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
          <Button onClick={handlePlayAgain}>Play again</Button>
        </div>
      </motion.div>
    </>
  );
}

export default QuizResult;
