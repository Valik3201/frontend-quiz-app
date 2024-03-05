import { useSelector } from "react-redux";
import {
  selectStartedStatus,
  selectScore,
  selectTitle,
} from "../redux/quizSelectors";
import Home from "../pages/Home";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

export const Layout = () => {
  const isStarded = useSelector(selectStartedStatus);
  const quizTitle = useSelector(selectTitle);
  const userScore = useSelector(selectScore);

  return (
    <div className="bg-light-grey dark:bg-dark-navy bg-cover bg-no-repeat bg-mobile-light md:bg-tablet-light lg:bg-desktop-light dark:bg-mobile-dark dark:md:bg-tablet-dark dark:lg:bg-desktop-dark text-dark-navy dark:text-pure-white pb-8">
      <div className="flex justify-center min-h-screen">
        <div className="container mx-auto">
          {!isStarded && quizTitle === "" && <Home />}

          {isStarded && <QuizQuestion />}

          {!isStarded && quizTitle !== "" && <QuizResult />}
        </div>
      </div>
    </div>
  );
};
