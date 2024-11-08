import React, { useState } from "react";
import Quiz from "../Quiz/Quiz";
import axios from "axios";
import "../Quiz/Quiz.css";
import Footer from "../Footer";

const QuizContainer = ({ quizzes ,model }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]);
  const [showres, setShowres] = useState(true);
  const quizNames = [
    "Extraversion Test",
    "Conscientiousness",
    "Aptitude",
    "Domain",
  ];
  const [inputFeatures, setInputFeatures] = useState([]);
  const [prediction, setPrediction] = useState("");

  const handleQuizEnd = (correctAnswers, totalQuestions) => {
    const score = (correctAnswers * 100) / totalQuestions;
    setQuizResults((prevResults) => [...prevResults, score]);

    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowres(false);
    }
  };

  // const getPrediction = async () => {
  //   const response = await axios.post(
  //     `https://vashisht-careerx.onrender.com/${model}`,
  //     {
  //       input_features: quizResults,
        
  //     }
  //   );
  //   setPrediction(response.data.prediction_label);
  // };

  const getPrediction = async () => {
    try {
      const response = await axios.post(
        `https://vashisht-careerx.onrender.com/${model}`,
        {
          input_features: quizResults,
        }
      );
      console.log("Response:", response.data); // Debugging
      setPrediction(response.data.prediction_label);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to get prediction. Please check the console for details.");
    }
  };
  

  return (
    <div>
      {showres ? (
        <Quiz ques={quizzes[currentQuizIndex]} onEnd={handleQuizEnd} />
      ) : (
        <div className="quiz-container">
          Your Result For the tests :
          <ul>
            {quizResults.map((item, index) => (
              <li className="quiz-result-ex">
                <div className="quiz-result-name">{quizNames[index]}</div>
                <div className="quiz-result-result" key={index}>
                  {item}
                </div>
              </li>
            ))}
          </ul>
          <div className="quiz-result-buttons">

          
          <button onClick={getPrediction}>Predict</button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeF6pXqA8XJjGDdKrCJIbEwdeRKIye3SEhD7KwYeq39fNePEA/viewform?embedded=true" target="_blank">
          <button>feedback form</button>
          </a>
          
          </div>
          <p className="quiz-result-desc">
            {prediction === "" ? (
              <p></p>
            ) : prediction === "Capable" ? (
              <p >Congratulations on your remarkable achievement! Your qualification in the test speaks volumes about your dedication and competence. Wishing you continued success and fulfillment as you embark on this journey.</p>
            ) : (
              <p className="nc">Though you haven't yet reached the qualification mark for that specific domain, your dedication to improving in aptitude, personality, and academics is commendable. Keep up the excellent work, and your efforts will surely yield success</p>
            )}
          </p>
          
          <Footer/>
        </div>
        
      )}
    </div>
  );
};

export default QuizContainer;
