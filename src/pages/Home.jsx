import { useState, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { getClassname } from "../utils/utils";
import { useDispatch } from "react-redux";
import { setStartQuiz } from "../redux/quizSlice";
import QuizQuestion from "../components/QuizQuestion";
import data from "../data/data.json";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);
  const [scope, animate] = useAnimate();
  const refs = useRef([]);

  const startQuiz = (quizTitle) => {
    setSelectedQuizTitle(quizTitle);

    setTimeout(() => {
      dispatch(setStartQuiz(quizTitle));
    }, 1000);

    return <QuizQuestion />;
  };

  const sequence = (index) => {
    animate([
      [refs.current[index], { scale: 1.5 }],
      [refs.current[index], { scale: 1 }],
    ]);
  };

  const visible = { opacity: 1, transition: { duration: 1 } };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible,
  };

  return (
    <>
      <div className="flex justify-end items-center py-4 md:py-5 lg:py-10">
        <ThemeSwitcher />
      </div>

      <div className="flex justify-between w-full flex-wrap">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0 } }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <div className="flex flex-col gap-2 select-all">
            <span className="text-3xl md:text-4xl font-extralight">
              Welcome to the
            </span>
            <span className="text-3xl md:text-4xl font-medium">
              Frontend Quiz!
            </span>
          </div>
          <p className="text-[1rem] md:text-base italic text-grey-navy dark:text-light-bluish select-all">
            Pick a subject to get started.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="flex flex-col gap-3 mt-10 md:mt-16 lg:mt-0 lg:gap-6 w-full lg:w-[564px]"
        >
          {data.quizzes.map(({ title, icon }, index) => (
            <motion.li
              key={title}
              className="cursor-pointer bg-pure-white dark:bg-navy border-[3px] border-pure-white dark:border-navy rounded-xl md:rounded-3xl transition duration-300 ease-in-out transform hover:border-purple dark:hover:border-purple shadow-light dark:shadow-dark"
              ref={(element) => (refs.current[index] = element)}
              onTap={() => sequence(index)}
              variants={itemVariants}
            >
              <button
                className="flex items-center p-2 lg:p-4 gap-4 md:gap-8 w-full"
                onClick={() => startQuiz(title)}
              >
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className={`w-10 h-10 md:w-12 md:h-12 p-1.5 md:p-2 rounded-md md:rounded-lg ${getClassname(
                    title
                  )}`}
                />
                <span className="text-[1.12rem] md:text-xl font-medium">
                  {title}
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Home;
