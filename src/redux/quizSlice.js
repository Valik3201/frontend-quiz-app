import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  score: 0,
  started: false,
  currentQuestionIndex: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setStartQuiz(state, action) {
      state.title = action.payload;
      state.started = true;
      state.currentQuestionIndex = 0;
    },
    setCurrentQuestionIndex(state, action) {
      state.currentQuestionIndex = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    setFinishQuiz(state) {
      state.started = false;
    },
    resetQuiz(state) {
      state.title = "";
      state.score = 0;
      state.currentQuestionIndex = null;
    },
  },
});

export const {
  setStartQuiz,
  setCurrentQuestionIndex,
  incrementScore,
  setFinishQuiz,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
