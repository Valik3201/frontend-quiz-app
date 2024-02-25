import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { getClassname } from "../utils/utils";

const Home = () => {
  const navigate = useNavigate();
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);

  const startQuiz = (quizTitle) => {
    setSelectedQuizTitle(quizTitle);
    navigate(`/${quizTitle}/question/0`);
  };

  return (
    <>
      <div className="flex justify-end items-center mt-12">
        <ThemeSwitcher />
      </div>

      <div className="flex justify-between w-full flex-wrap mt-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 select-all">
            <span className="text-3xl md:text-4xl font-extralight">
              Welcome to the
            </span>
            <span className="text-3xl md:text-4xl font-medium">
              Frontend Quiz!
            </span>
          </div>
          <p className="text-base italic text-grey-navy dark:text-light-bluish select-all">
            Pick a subject to get started.
          </p>
        </div>

        <ul className="flex flex-col gap-3 mt-10 md:mt-16 lg:mt-0 lg:gap-6 w-full lg:w-[564px]">
          {data.quizzes.map(({ title, icon }) => (
            <li
              key={title}
              className="cursor-pointer bg-pure-white dark:bg-navy border-[3px] border-pure-white dark:border-navy rounded-xl md:rounded-3xl transition duration-300 ease-in-out transform hover:border-purple dark:hover:border-purple shadow-light dark:shadow-dark"
            >
              <button
                className="flex items-center p-3 lg:p-4 gap-4 md:gap-8 w-full"
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
