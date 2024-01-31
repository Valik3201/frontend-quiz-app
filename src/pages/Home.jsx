import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

const Container = styled.div`
  display: flex;
  width: 72.5rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const WelcomeText = styled.span`
  color: ${colors.darkNavy};
  ${fonts.headingLRegular};
`;

const QuizText = styled.span`
  color: ${colors.darkNavy};
  ${fonts.headingLBold};
`;

const Subtitle = styled.p`
  color: ${colors.greyNavy};
  ${fonts.bodyS};
`;

const QuizList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
`;

const QuizButton = styled.button`
  display: flex;
  width: 35.25rem;
  padding: calc(1.25rem - 6px);
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 1.5rem;
  color: ${colors.darkNavy};
  background: ${colors.pureWhite};
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);
  border: 3px solid transparent;
  transition: 0.25s ease-in-out;

  &:hover {
    border: 3px solid ${colors.purple};
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${(props) => {
      switch (props.color) {
        case 1:
          return "#fff1e9";
        case 2:
          return "#e0fdef";
        case 3:
          return "#ebf0ff";
        case 4:
          return "#f6e7ff";
        default:
          return "#f6e7ff";
      }
    }};
  }
`;

const QuizTitle = styled.p`
  ${fonts.headingS}
`;

function Home() {
  const navigate = useNavigate();
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);

  const startQuiz = (quizTitle) => {
    setSelectedQuizTitle(quizTitle);
    navigate(`/${quizTitle}/question/0`);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>
          <WelcomeText>Welcome to the </WelcomeText>
          <QuizText>Frontend Quiz!</QuizText>
        </Title>

        <Subtitle>Pick a subject to get started.</Subtitle>
      </TitleContainer>

      <QuizList>
        {data.quizzes.map(({ title, icon }, index) => (
          <li key={title}>
            <QuizButton
              as="button"
              color={index + 1}
              onClick={() => startQuiz(title)}
            >
              <img src={icon} alt={`${title} icon`} />
              <QuizTitle>{title}</QuizTitle>
            </QuizButton>
          </li>
        ))}
      </QuizList>
    </Container>
  );
}

export default Home;
