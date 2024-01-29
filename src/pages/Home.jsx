import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function Home() {
  const navigate = useNavigate();
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);

  const startQuiz = (quizTitle) => {
    setSelectedQuizTitle(quizTitle);
    navigate(`/${quizTitle}/question/0`);
  };

  return (
    <div>
      <h1>Welcome to the Frontend Quiz!</h1>
      <p>Pick a subject to get started.</p>
      <ul>
        {data.quizzes.map(({ title, icon }) => (
          <li key={title}>
            <button onClick={() => startQuiz(title)}>
              <img src={icon} alt={`${title} icon`} />
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
