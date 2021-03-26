import { createContext, useContext } from "react";
const QuestionContext = createContext();
export const QuestionProvider = QuestionContext.Provider;
export const useQuestion = () => useContext(QuestionContext);
