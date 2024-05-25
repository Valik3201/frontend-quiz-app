const QuestionDisplay = ({ questionText }) => {
  const renderTextWithNewlines = (text) => {
    return text.split("\n").map((line, index) => (
      <p
        key={index}
        className="text-base md:text-2xl font-medium max-w-[35rem]"
      >
        {line}
      </p>
    ));
  };

  const renderQuestion = (question) => {
    const codeRegex = /```([\s\S]*?)```/g;
    let match;
    const parts = [];
    let lastIndex = 0;

    while ((match = codeRegex.exec(question)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          renderTextWithNewlines(question.substring(lastIndex, match.index))
        );
      }

      parts.push(
        <pre
          key={match.index}
          className="bg-dark-navy text-light-grey mt-4 p-4 rounded"
        >
          <code>{match[1]}</code>
        </pre>
      );

      lastIndex = codeRegex.lastIndex;
    }

    if (lastIndex < question.length) {
      parts.push(renderTextWithNewlines(question.substring(lastIndex)));
    }

    return parts;
  };

  return <div>{renderQuestion(questionText)}</div>;
};

export default QuestionDisplay;
