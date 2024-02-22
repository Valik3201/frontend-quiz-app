import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Home = () => {
  const navigate = useNavigate();
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);

  const startQuiz = (quizTitle) => {
    setSelectedQuizTitle(quizTitle);
    navigate(`/${quizTitle}/question/0`);
  };

  function getClassname(index) {
    switch (index % 4) {
      case 0:
        return "bg-[#fff1e9]";
      case 1:
        return "bg-[#e0fdef]";
      case 2:
        return "bg-[#ebf0ff]";
      case 3:
        return "bg-[#f6e7ff]";
      default:
        return "bg-[#f6e7ff]";
    }
  }

  return (
    <>
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
        {data.quizzes.map(({ title, icon }, index) => (
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
                  index
                )}`}
              />
              <span className="text-[1.12rem] md:text-xl font-medium">
                {title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
