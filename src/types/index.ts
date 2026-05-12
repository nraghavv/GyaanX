export type QuestionType = "MCQ" | "Coding" | "Theory" | "Numerical";
export type Frequency = "Very High" | "High" | "Medium";

export interface Answer {
  finalAnswer: string;
  explanation: string;
  aim?: string;
  theory?: string;
  algorithm?: string[];
  code?: string;
  input?: string;
  output?: string;
  result?: string;
  flowLogic?: string[];
}

export interface Question {
  id: number;
  unit: number;
  topic: string;
  pattern: string;
  type: QuestionType;
  frequency: Frequency;
  isMustDo: boolean;
  question: string;
  options?: string[];
  answer: Answer;
  pseudocode?: string;
}

export interface Progress {
  [questionId: number]: boolean;
}
