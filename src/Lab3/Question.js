function Question({ question, onAnswer }) {
  return (
    <div className="card p-4 shadow">
      <h2>Question {question.id}</h2>
      <h4>{question.question}</h4>

      <div className="mt-3">
        {question.options.map((option) => (
          <button
            key={option}
            className="btn btn-outline-primary d-block w-100 mb-2 text-start"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;