import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";
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
    <div className="flex flex-col items-center min-h-screen bg-light-grey dark:bg-dark-navy bg-cover bg-no-repeat bg-mobile-light md:bg-tablet-light lg:bg-desktop-light dark:bg-mobile-dark dark:md:bg-tablet-dark dark:lg:bg-desktop-dark text-dark-navy dark:text-pure-white">
      <ThemeSwitcher />

      <div className="flex justify-between w-288 pt-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-light">Welcome to the</span>
            <span className="text-4xl font-medium">Frontend Quiz!</span>
          </div>
          <p className="text-base italic text-grey-navy">
            Pick a subject to get started.
          </p>
        </div>
        <ul className="flex flex-col gap-6">
          {data.quizzes.map(({ title, icon }, index) => (
            <li key={title}>
              <button
                className="flex items-center w-96 p-3 gap-8 cursor-pointer bg-pure-white dark:bg-navy border-[3px] border-pure-white dark:border-navy rounded-xl transition duration-300 ease-in-out transform hover:border-purple dark:hover:border-purple"
                onClick={() => startQuiz(title)}
              >
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className={`w-10 h-10 rounded-md ${getClassname(index)}`}
                />
                <span className="text-xl font-medium">{title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
