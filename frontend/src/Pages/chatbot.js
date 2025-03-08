
// import { useState, useRef, useEffect } from "react";
// import "./chatbot.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import logo from './robot-assistant.png';

// function Chatbot() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const chatContainerRef = useRef(null);
//   const [show, setShow] = useState(true);

//   const predefinedQuestions = [
//     "What qualifications do I need to become a doctor?",
//     "How do I start a career in engineering?",
//     "What skills are needed for a Chartered Accountant?",
//     "What is the scope of counseling?",
//     "Which career is the most challenging?"
//   ];

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, generatingAnswer]);

//   async function generateAnswer(e) {
//     if (e) e.preventDefault();
//     if (!question.trim()) return;

//     const currentQuestion = question;
//     setQuestion(""); // Clear input immediately after sending

//     // Add user question to chat history
//     setChatHistory((prev) => [
//         ...prev,
//         { type: "question", content: currentQuestion },
//     ]);
//     setGeneratingAnswer(true);

//     try {
//         const response = await axios({
//           url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKLj0qsTzpWGamiVe2hdEtHuQzuxifA3Y`, // Replace with your valid API key
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             data: {
//                 prompt: {
//                     text: `You are a career guidance chatbot. Respond to the following query with empathy and detailed information: "${currentQuestion}"`,
//                 },
//                 temperature: 0.7, // Adjust temperature for creativity
//                 maxOutputTokens: 300,
//             },
//         });

//         console.log("API Response:", response.data); // Log the API response for debugging
//         const aiResponse =
//             response?.data?.candidates?.[0]?.output ||
//             "I'm sorry, I couldn't find the answer right now. Please try again later.";

//         setChatHistory((prev) => [
//             ...prev,
//             { type: "answer", content: aiResponse },
//         ]);
//     } catch (error) {
//         console.error("Error generating answer:", error.response || error);

//         // Display a helpful error message to the user
//         setChatHistory((prev) => [
//             ...prev,
//             { type: "answer", content: "Sorry, something went wrong. Please check your API configuration." },
//         ]);
//     } finally {
//         setGeneratingAnswer(false);
//     }
// }



//   const handlePredefinedQuestionClick = (predefinedQuestion) => {
//     setQuestion(predefinedQuestion);
//     generateAnswer({ preventDefault: () => {} });
//   };

//   return (
//     <>
//       <button className="chatbot" onClick={() => setShow(!show)}>
//         <img src={logo} alt="Chatbot Logo" />
//       </button>

//       <div className={show ? `app-container1` : `app-container`}>
//         <div className="chat-container" ref={chatContainerRef}>
//           {chatHistory.length === 0 ? (
//             <div className="welcome-message">
//               <div className="welcome-box">
//                 <h2>Welcome to Career Guide AI! 👋</h2>
//                 <p>Ask me anything about your career journey, or try one of these:</p>
//                 <div className="predefined-questions">
//                   {predefinedQuestions.map((q, index) => (
//                     <button
//                       key={index}
//                       className="predefined-question-button"
//                       onClick={() => handlePredefinedQuestionClick(q)}
//                     >
//                       {q}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="note">
//                   Type your question below and press Enter or click Send!
//                 </p>
//               </div>
//             </div>
//           ) : (
//             chatHistory.map((chat, index) => (
//               <div key={index} className={`chat-bubble ${chat.type}`}>
//                 <ReactMarkdown>{chat.content}</ReactMarkdown>
//               </div>
//             ))
//           )}
//           {generatingAnswer && (
//             <div className="chat-bubble answer">
//               <div className="thinking">Thinking...</div>
//             </div>
//           )}
//         </div>

//         <form onSubmit={generateAnswer} className="input-form">
//           <textarea
//             required
//             className="input-textarea"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Ask anything about your career..."
//             rows="2"
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 e.preventDefault();
//                 generateAnswer(e);
//               }
//             }}
//           ></textarea>
//           <button type="submit" className="send-button" disabled={generatingAnswer}>
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Chatbot;





// import { useState, useRef, useEffect } from "react";
// import "./chatbot.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import logo from './robot-assistant.png';

// function Chatbot() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const chatContainerRef = useRef(null);
//   const [show, setShow] = useState(true);

//   // Career-focused predefined questions
//   const predefinedQuestions = [
//     "Example Questions",
//     "How do I become a doctor?",
//     "What are the cutoffs for NEET to get into medical colleges?",
//     "Tell me about engineering careers after 12th science",
//     "What are the fee structures for government vs private medical colleges?",
//     "What career options do I have after 12th commerce?"
//   ];

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, generatingAnswer]);

//   async function generateAnswer(e) {
//     if (e) e.preventDefault();
//     if (!question.trim()) return;

//     const currentQuestion = question;
//     setQuestion(""); // Clear input immediately after sending

//     // Add user question to chat history
//     setChatHistory((prev) => [
//       ...prev,
//       { type: "question", content: currentQuestion },
//     ]);
//     setGeneratingAnswer(true);

//     try {
//       // Using the exact API endpoint and model name from the documentation you shared
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCvp4zeKA2jE9sS_DmLhvc_JTJUWezKEW0`,
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `You are CareerDoctor, a specialized career guidance chatbot for secondary school students (11th and 12th grade). 
//                   You provide detailed information about various career paths, educational requirements, entrance exams, fee structures, 
//                   and overall career guidance. 
                  
//                   When discussing careers, always include:
//                   1. A brief description of the profession
//                   2. Educational qualifications needed
//                   3. Relevant entrance exams with their cutoffs (if applicable)
//                   4. Fee structures for both government and private institutions
//                   5. Career progression paths
//                   6. Skills required for success
                  
//                   For medical professions, include specific information about:
//                   - NEET cutoffs for government, private, and central government institutions
//                   - AIIMS, JIPMER, and other specialized medical entrance exams
//                   - Duration of various medical courses
//                   - Specialization options after MBBS
                  
//                   For engineering:
//                   - JEE Main/Advanced requirements
//                   - Different branches and their prospects
//                   - Government vs private engineering college details
                  
//                   For commerce and humanities streams:
//                   - List top career options
//                   - Required qualifications for each
//                   - Entrance exams where applicable
                  
//                   Now, respond to this question from a student: "${currentQuestion}"
                  
//                   Provide a detailed but concise response that a 16-18 year old would understand. Use simple language but don't leave out important details. Format your response with appropriate headings and bullet points where needed.`
//                 }
//               ]
//             }
//           ]
//         },
//       });

//       // Extract response data according to the API structure
//       const aiResponse = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
//         "I'm sorry, I couldn't find the answer right now. Please try again later.";

//       setChatHistory((prev) => [
//         ...prev,
//         { type: "answer", content: aiResponse },
//       ]);
//     } catch (error) {
//       console.error("Error generating answer:", error.response || error);

//       // Display a helpful error message to the user
//       setChatHistory((prev) => [
//         ...prev,
//         { type: "answer", content: "Sorry, I'm having trouble connecting to the Gemini API. This could be due to an API issue or an authentication problem with your key. Please try again later or check with your administrator." },
//       ]);
//     } finally {
//       setGeneratingAnswer(false);
//     }
//   }

//   const handlePredefinedQuestionClick = (predefinedQuestion) => {
//     setQuestion(predefinedQuestion);
//     // Using a timeout to ensure the state update happens before generating answer
//     setTimeout(() => {
//       generateAnswer({ preventDefault: () => {} });
//     }, 10);
//   };

//   return (
//     <>
//       <button className="chatbot" onClick={() => setShow(!show)}>
//         <img src={logo} alt="Chatbot Logo" />
//       </button>

//       <div className={show ? `app-container1` : `app-container`}>
//         <div className="chat-header">
//           <h2>Career Doctor AI</h2>
//           <p>Your personal guide to future careers</p>
//         </div>
        
//         <div className="chat-container" ref={chatContainerRef}>
//           {chatHistory.length === 0 ? (
//             <div className="welcome-message">
//               <div className="welcome-box">
//                 <h2>Welcome to Career Doctor AI! 👨‍⚕️👩‍🔬👨‍💼</h2>
//                 <p>I can help you explore career paths after 12th grade. Ask me about any profession or try one of these:</p>
//                 <div className="predefined-questions">
//                   {predefinedQuestions.map((q, index) => (
//                     <button
//                       key={index}
//                       className="predefined-question-button"
//                       onClick={() => handlePredefinedQuestionClick(q)}
//                     >
//                       {q}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="note">
//                   I can provide details on qualifications, entrance exams, fee structures, and more!
//                 </p>
//               </div>
//             </div>
//           ) : (
//             chatHistory.map((chat, index) => (
//               <div key={index} className={`chat-bubble ${chat.type}`}>
//                 <ReactMarkdown>{chat.content}</ReactMarkdown>
//               </div>
//             ))
//           )}
//           {generatingAnswer && (
//             <div className="chat-bubble answer">
//               <div className="thinking">Researching career info...</div>
//             </div>
//           )}
//         </div>

//         <form onSubmit={generateAnswer} className="input-form">
//           <textarea
//             required
//             className="input-textarea"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Ask me about any career path after 12th grade..."
//             rows="2"
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 e.preventDefault();
//                 generateAnswer(e);
//               }
//             }}
//           ></textarea>
//           <button type="submit" className="send-button" disabled={generatingAnswer}>
//             Send
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Chatbot;


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

  // Career-focused predefined questions with emojis
  const predefinedQuestions = [
    "🏥 How do I become a doctor?",
    "📊 What are the cutoffs for NEET to get into medical colleges?",
    "🔧 Tell me about engineering careers after 12th science",
    "💰 What are the fee structures for government vs private medical colleges?",
    "📈 What career options do I have after 12th commerce?"
  ];

  // Category emojis map for different career paths
  const categoryEmojis = {
    "doctor": "👨‍⚕️",
    "medical": "🏥",
    "mbbs": "⚕️",
    "neet": "📝",
    "engineering": "👩‍💻",
    "jee": "🎓",
    "tech": "💻",
    "commerce": "📊",
    "business": "💼",
    "finance": "💰",
    "arts": "🎨",
    "humanities": "📚",
    "science": "🔬",
    "research": "🔍",
    "teaching": "👨‍🏫",
    "education": "🏫",
    "law": "⚖️",
    "design": "✏️",
    "sports": "🏅",
    "aviation": "✈️",
    "defense": "🪖",
    "media": "📱"
  };

  // Function to add relevant emojis based on content
  const addEmojisToResponse = (text) => {
    let enhancedText = text;
    
    // Add emojis to headings
    enhancedText = enhancedText.replace(/# (.*?)(?:\n|$)/g, (match, heading) => {
      let emoji = "🎯";
      
      // Find relevant emoji for heading
      for (const [keyword, relatedEmoji] of Object.entries(categoryEmojis)) {
        if (heading.toLowerCase().includes(keyword)) {
          emoji = relatedEmoji;
          break;
        }
      }
      
      return `# ${emoji} ${heading}\n`;
    });
    
    // Add emojis to subheadings
    enhancedText = enhancedText.replace(/## (.*?)(?:\n|$)/g, (match, heading) => {
      let emoji = "✨";
      
      // Find relevant emoji for subheading
      for (const [keyword, relatedEmoji] of Object.entries(categoryEmojis)) {
        if (heading.toLowerCase().includes(keyword)) {
          emoji = relatedEmoji;
          break;
        }
      }
      
      return `## ${emoji} ${heading}\n`;
    });
    
    // Add emojis to list items
    enhancedText = enhancedText.replace(/- (.*?)(?:\n|$)/g, (match, item) => {
      let emoji = "•";
      
      // Try to find a relevant emoji for the list item
      for (const [keyword, relatedEmoji] of Object.entries(categoryEmojis)) {
        if (item.toLowerCase().includes(keyword)) {
          emoji = relatedEmoji;
          break;
        }
      }
      
      // If no specific emoji was found, use a generic bullet point emoji
      if (emoji === "•") emoji = "✅";
      
      return `- ${emoji} ${item}\n`;
    });
    
    return enhancedText;
  };

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
      // Using the exact API endpoint and model name from the documentation
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCvp4zeKA2jE9sS_DmLhvc_JTJUWezKEW0`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          contents: [
            {
              parts: [
                {
                  text: `You are CareerDoctor, a specialized career guidance chatbot for secondary school students (11th and 12th grade). 
                  You provide detailed information about various career paths, educational requirements, entrance exams, fee structures, 
                  and overall career guidance.
                  
                  When discussing careers, always include:
                  1. A brief description of the profession
                  2. Educational qualifications needed
                  3. Relevant entrance exams with their cutoffs (if applicable)
                  4. Fee structures for both government and private institutions
                  5. Career progression paths
                  6. Skills required for success
                  
                  For medical professions, include specific information about:
                  - NEET cutoffs for government, private, and central government institutions
                  - AIIMS, JIPMER, and other specialized medical entrance exams
                  - Duration of various medical courses
                  - Specialization options after MBBS
                  
                  For engineering:
                  - JEE Main/Advanced requirements
                  - Different branches and their prospects
                  - Government vs private engineering college details
                  
                  For commerce and humanities streams:
                  - List top career options
                  - Required qualifications for each
                  - Entrance exams where applicable
                  
                  Use markdown formatting with # for main headings, ## for subheadings, and - for list items.
                  
                  Now, respond to this question from a student: "${currentQuestion}"
                  
                  Provide a detailed but concise response that a 16-18 year old would understand. Use simple language but don't leave out important details.`
                }
              ]
            }
          ]
        },
      });

      // Extract response data according to the API structure
      let aiResponse = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm sorry, I couldn't find the answer right now. Please try again later.";
      
      // Add emojis to the response
      aiResponse = addEmojisToResponse(aiResponse);

      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Error generating answer:", error.response || error);

      // Display a helpful error message to the user
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: "😕 Sorry, I'm having trouble connecting to my knowledge base. Please try again later or check with your administrator." },
      ]);
    } finally {
      setGeneratingAnswer(false);
    }
  }

  const handlePredefinedQuestionClick = (predefinedQuestion) => {
    // Remove emoji from the question before sending to API
    const cleanQuestion = predefinedQuestion.replace(/^\S+\s/, '');
    setQuestion(cleanQuestion);
    // Using a timeout to ensure the state update happens before generating answer
    setTimeout(() => {
      generateAnswer({ preventDefault: () => {} });
    }, 10);
  };

  return (
    <>
      <button className="chatbot" onClick={() => setShow(!show)}>
        <img src={logo} alt="Chatbot Logo" />
      </button>

      <div className={show ? `app-container1` : `app-container`}>
        <div className="chat-header">
          <div className="chat-header-icon">🤖</div>
          <div className="chat-header-text">
            <h2>Career Doctor AI</h2>
            <p>Your personal guide to future careers</p>
          </div>
        </div>
        
        <div className="chat-container" ref={chatContainerRef}>
          {chatHistory.length === 0 ? (
            <div className="welcome-message">
              <div className="welcome-box">
                <div className="welcome-icon">🎓</div>
                <h2>Welcome to Career Doctor AI!</h2>
                <p>I can help you explore career paths after 12th grade. Ask me about any profession or try one of these:</p>
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
                  💡 I can provide details on qualifications, entrance exams, fee structures, and more!
                </p>
              </div>
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className={`chat-bubble ${chat.type}`}>
                {chat.type === "question" && <div className="chat-icon">👤</div>}
                {chat.type === "answer" && <div className="chat-icon">🤖</div>}
                <div className="chat-content">
                  <ReactMarkdown>{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {generatingAnswer && (
            <div className="chat-bubble answer">
              <div className="chat-icon">🤖</div>
              <div className="chat-content">
                <div className="thinking">
                  <span>Researching career info</span>
                  <span className="dot1">.</span>
                  <span className="dot2">.</span>
                  <span className="dot3">.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={generateAnswer} className="input-form">
          <textarea
            required
            className="input-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="💭 Ask me about any career path after 12th grade..."
            rows="2"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                generateAnswer(e);
              }
            }}
          ></textarea>
          <button type="submit" className="send-button" disabled={generatingAnswer}>
            <span>Send</span>
            <span className="send-icon">📤</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Chatbot;