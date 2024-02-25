import { getClassname } from "../utils/utils";

const QuizTitle = ({ selectedQuiz }) => {
  return (
    <div className="flex items-center gap-4 md:gap-6 text-xl font-medium">
      <img
        src={selectedQuiz.icon}
        alt={`${selectedQuiz.title} icon`}
        className={`w-10 h-10 md:w-12 md:h-12 p-1.5 md:p-2 rounded-md md:rounded-lg ${getClassname(
          selectedQuiz.title
        )}`}
      />
      <h2 className="text-[1.12rem] md:text-xl">{selectedQuiz.title}</h2>
    </div>
  );
};

export default QuizTitle;
