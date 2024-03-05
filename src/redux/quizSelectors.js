export const selectTitle = (state) => state.quiz.title;
export const selectScore = (state) => state.quiz.score;
export const selectStartedStatus = (state) => state.quiz.started;
export const selectCurrentQuestionIndex = (state) =>
  state.quiz.currentQuestionIndex;
