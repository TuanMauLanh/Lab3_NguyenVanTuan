import { useState } from "react";
import Question from "./Question";
import Score from "./Score";

function QuizApp() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
    {
      id: 3,
      question: "Which language is used to build React apps?",
      options: ["JavaScript", "Python", "Java", "C++"],
      answer: "JavaScript",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React Quiz App</h1>

      {quizEnd ? (
        <Score score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;