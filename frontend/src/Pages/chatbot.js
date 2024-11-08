// import { useState, useRef, useEffect } from "react";
// import "./chatbot.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import logo from './robot-assistant.png';

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const chatContainerRef = useRef(null);

//   const [show, setShow] = useState(true);


//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, generatingAnswer]);

//   async function generateAnswer(e) {
//     e.preventDefault();
//     if (!question.trim()) return;
    
//     setGeneratingAnswer(true);
//     const currentQuestion = question;
//     setQuestion("What qualifications do I need to become a doctor?",
//     "How do I start a career in engineering?",
//     "What skills are needed for a Chartered Accountant?",
//     "What is the scope of counseling?",
//     "Which career is the most challenging?"); // Clear input immediately after sending
    
//     // Add user question to chat history
//     setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
    
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKLj0qsTzpWGamiVe2hdEtHuQzuxifA3Y`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
        
//       });

//       const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
//       setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
//       setAnswer(aiResponse);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }
//     setGeneratingAnswer(false);
//   }
  
  

//   return (
//     <>
    
 
//     <button className="chatbot" onClick={() => setShow(!show)}><img src={logo}></img></button>
    
//     <div className={show ? `app-container1`:`app-container`}>
      

//       <div className="chat-container" ref={chatContainerRef}>
//         {chatHistory.length === 0 ? (
//           <div className="welcome-message">
//             <div className="welcome-box">
//               <h2>Welcome to Chat AI! 👋</h2>
//               <p>I'm here to help you with anything you'd like to know. You can ask me about:</p>
              
//               <p className="note">Just type your question below and press Enter or click Send!</p>
//             </div>
//           </div>
//         ) : (
//           chatHistory.map((chat, index) => (
//             <div key={index} className={`chat-bubble ${chat.type}`}>
//               <ReactMarkdown>{chat.content}</ReactMarkdown>
//             </div>
//           ))
//         )}
//         {generatingAnswer && (
//           <div className="chat-bubble answer">
//             <div className="thinking">Thinking...</div>
//           </div>
//         )}
//       </div>

//       <form onSubmit={generateAnswer} className="input-form">
//         <textarea
//           required
//           className="input-textarea"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask anything..."
//           rows="2"
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' && !e.shiftKey) {
//               e.preventDefault();
//               generateAnswer(e);
//             }
//           }}
//         ></textarea>
//         <button type="submit" className="send-button" disabled={generatingAnswer}>
//           Send
//         </button>
//       </form>
//     </div>
//     </>
//   );
// }

// export default App;




import { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import logo from './robot-assistant.png';

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);
  const [show, setShow] = useState(true);

  const predefinedQuestions = [
    "What qualifications do I need to become a doctor?",
    "How do I start a career in engineering?",
    "What skills are needed for a Chartered Accountant?",
    "What is the scope of counseling?",
    "Which career is the most challenging?"
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    if (e) e.preventDefault();
    if (!question.trim()) return;

    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    // Add user question to chat history
    setChatHistory((prev) => [
        ...prev,
        { type: "question", content: currentQuestion },
    ]);
    setGeneratingAnswer(true);

    try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKLj0qsTzpWGamiVe2hdEtHuQzuxifA3Y`, // Replace with your valid API key
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                prompt: {
                    text: `You are a career guidance chatbot. Respond to the following query with empathy and detailed information: "${currentQuestion}"`,
                },
                temperature: 0.7, // Adjust temperature for creativity
                maxOutputTokens: 300,
            },
        });

        console.log("API Response:", response.data); // Log the API response for debugging
        const aiResponse =
            response?.data?.candidates?.[0]?.output ||
            "I'm sorry, I couldn't find the answer right now. Please try again later.";

        setChatHistory((prev) => [
            ...prev,
            { type: "answer", content: aiResponse },
        ]);
    } catch (error) {
        console.error("Error generating answer:", error.response || error);

        // Display a helpful error message to the user
        setChatHistory((prev) => [
            ...prev,
            { type: "answer", content: "Sorry, something went wrong. Please check your API configuration." },
        ]);
    } finally {
        setGeneratingAnswer(false);
    }
}



  const handlePredefinedQuestionClick = (predefinedQuestion) => {
    setQuestion(predefinedQuestion);
    generateAnswer({ preventDefault: () => {} });
  };

  return (
    <>
      <button className="chatbot" onClick={() => setShow(!show)}>
        <img src={logo} alt="Chatbot Logo" />
      </button>

      <div className={show ? `app-container1` : `app-container`}>
        <div className="chat-container" ref={chatContainerRef}>
          {chatHistory.length === 0 ? (
            <div className="welcome-message">
              <div className="welcome-box">
                <h2>Welcome to Career Guide AI! 👋</h2>
                <p>Ask me anything about your career journey, or try one of these:</p>
                <div className="predefined-questions">
                  {predefinedQuestions.map((q, index) => (
                    <button
                      key={index}
                      className="predefined-question-button"
                      onClick={() => handlePredefinedQuestionClick(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <p className="note">
                  Type your question below and press Enter or click Send!
                </p>
              </div>
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className={`chat-bubble ${chat.type}`}>
                <ReactMarkdown>{chat.content}</ReactMarkdown>
              </div>
            ))
          )}
          {generatingAnswer && (
            <div className="chat-bubble answer">
              <div className="thinking">Thinking...</div>
            </div>
          )}
        </div>

        <form onSubmit={generateAnswer} className="input-form">
          <textarea
            required
            className="input-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything about your career..."
            rows="2"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                generateAnswer(e);
              }
            }}
          ></textarea>
          <button type="submit" className="send-button" disabled={generatingAnswer}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Chatbot;



// import { useState, useRef, useEffect } from "react";
// import "./chatbot.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, generatingAnswer]);

//   async function generateAnswer(e) {
//     e.preventDefault();
//     if (!question.trim()) return;
    
//     setGeneratingAnswer(true);
//     const currentQuestion = question;
//     setQuestion(""); // Clear input immediately after sending
    
//     // Add user question to chat history
//     setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
    
//     try {
//       const response = await axios({
//         url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKLj0qsTzpWGamiVe2hdEtHuQzuxifA3Y',
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
//       setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
//       setAnswer(aiResponse);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }
//     setGeneratingAnswer(false);
//   }

//   return (
//     <div className="app-container">
//       <header className="header">
//         <a href="https://github.com/Vishesh-Pandey/chat-ai" 
//            target="_blank" 
//            rel="noopener noreferrer"
//            className="header-link">
//           <h1 className="header-title">Chat AI</h1>
//         </a>
//       </header>

//       <div className="chat-container" ref={chatContainerRef}>
//         {chatHistory.length === 0 ? (
//           <div className="welcome-message">
//             <div className="welcome-box">
//               <h2>Welcome to Chat AI! 👋</h2>
//               <p>I'm here to help you with anything you'd like to know. You can ask me about:</p>
//               <div className="topics-grid">
//                 <div className="topic-item">💡 General knowledge</div>
//                 <div className="topic-item">🔧 Technical questions</div>
//                 <div className="topic-item">📝 Writing assistance</div>
//                 <div className="topic-item">🤔 Problem solving</div>
//               </div>
//               <p className="note">Just type your question below and press Enter or click Send!</p>
//             </div>
//           </div>
//         ) : (
//           chatHistory.map((chat, index) => (
//             <div key={index} className={`chat-bubble ${chat.type}`}>
//               <ReactMarkdown>{chat.content}</ReactMarkdown>
//             </div>
//           ))
//         )}
//         {generatingAnswer && (
//           <div className="chat-bubble answer">
//             <div className="thinking">Thinking...</div>
//           </div>
//         )}
//       </div>

//       <form onSubmit={generateAnswer} className="input-form">
//         <textarea
//           required
//           className="input-textarea"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask anything..."
//           rows="2"
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' && !e.shiftKey) {
//               e.preventDefault();
//               generateAnswer(e);
//             }
//           }}
//         ></textarea>
//         <button type="submit" className="send-button" disabled={generatingAnswer}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
