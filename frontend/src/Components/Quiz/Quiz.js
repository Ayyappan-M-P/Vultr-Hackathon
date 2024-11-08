import React, { useState , useEffect} from "react";
import './Quiz.css'

const Quiz = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswers , setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const quiz = props.ques;

  React.useEffect(() => {
    resetQuiz();
  }, [props.ques]);
  
  const [isQuizEnd, setIsQuizEnd] = useState(false);

useEffect(() => {
  if (isQuizEnd) {
    props.onEnd(correctAnswers , questions.length);
    setIsQuizEnd(false);
  }
}, [isQuizEnd]);

  const resetQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setCorrectAnswers(0);
    setUserAnswers([]);
  };

  
  const { onEnd ,quizzes} = props;

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]);
  const [showres , setShowres] = useState(true);
  const [quizEnded, setQuizEnded] = useState(false);

  


  const { questions , category} = quiz;

  const { question, choices, type, correctAnswer } = questions[activeQuestion];
  
  const onClickNext = () => {
    const isCorrect = choices[selectedAnswerIndex] === correctAnswer;
  
    if (category == 'Extraversion' || category == 'Conscientiousness'){
      setCorrectAnswers((prev) => prev + (selectedAnswerIndex+1)/5)
    }
    else if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, choices[selectedAnswerIndex]]);
    setSelectedAnswer(isCorrect);
    setSelectedAnswerIndex(null);
  
    if (activeQuestion === questions.length - 1) {
      setIsQuizEnd(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
    }
  };
  
  // const handleQuizEnd = (correctAnswers) => {
  //   if (currentQuizIndex < quizzes.length - 1) {
  //     setQuizResults((prevResults) => [...prevResults, correctAnswers]);
  //     setCurrentQuizIndex(currentQuizIndex + 1);
  //   } else {
  //     setQuizResults((prevResults) => [...prevResults, correctAnswers]);
  //     setShowres(false);
  //   }
  
  //   setQuizEnded(true);
  // };
  
  const checkQuizEnd = (correctAnswers) => {
    if (activeQuestion === questions.length - 1) {
      props.onEnd(correctAnswers, questions.length);
    }
  };
  

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (<>

      <div className="quiz-category">
        {category}
      </div>
 
    <div className="quiz-container">
      {!showResult ? (
        <div>
          
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          {type == "MCQs" ? (
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
          ) : (
            <div className="rating-answer">
              {choices.map((answer,index) => (
                <div className="rating">
                  <div className="desc">{answer}</div>

                  <div  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-circle" : "circle"
                  }></div>
                </div>
              ))
                
              }
            </div>
          )}
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next" }
            </button>
          </div>
        </div>
      ) : (
        <div>{userAnswers}</div>
      )}
    </div>

    </>
  );
};

export default Quiz;
