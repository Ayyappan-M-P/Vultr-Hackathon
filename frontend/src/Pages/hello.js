const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("en");
  
    interface ChatMessage {
      sender: string;
      message: string;
    }
  
    const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);
  
    // Utility function to save chatLog to localStorage
    const saveChatLogToLocalStorage = (log: ChatMessage[]) => {
      localStorage.setItem("chatLog", JSON.stringify(log));
    };
  
    // Utility function to load chatLog from localStorage
    const loadChatLogFromLocalStorage = (): ChatMessage[] => {
      const storedChatLog = localStorage.getItem("chatLog");
      return storedChatLog ? JSON.parse(storedChatLog) : [];
    };
  
    // Toggle chat window
    const toggleChat = () => {
      setIsOpen(!isOpen);
    };
  
    // Load chat history from localStorage on component mount
    useEffect(() => {
      const storedChatLog = loadChatLogFromLocalStorage();
      setChatLog(storedChatLog);
    }, []);
  
    // Save chat history to localStorage whenever chatLog changes
    useEffect(() => {
      if (chatLog.length > 0) {
        saveChatLogToLocalStorage(chatLog);
      }
    }, [chatLog]);

    //stop
  
    // Function to handle sending the user's message and getting the bot's response
    const handleSendMessage = async () => {
      if (!userMessage.trim()) return;
  
      const newChatLog = [...chatLog, { sender: "user", message: userMessage }];
      setChatLog(newChatLog);
      setUserMessage(""); // Clear the input field
      setLoading(true);
  
      try {
        const genAI = new GoogleGenerativeAI("google gemini api key");
        const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContentStream(userMessage);
        const response = await result.response;
        const text = response.text();
  
        const responseText = text || "I'm not sure how to respond.";
  
        const updatedChatLog = [
          ...newChatLog,
          { sender: "bot", message: responseText },
        ];
        setChatLog(updatedChatLog);
  
        saveChatLogToLocalStorage(updatedChatLog);
      } catch (error) {
        console.error("Error fetching response:", error);
        const errorChatLog = [
          ...newChatLog,
          { sender: "bot", message: "Sorry, something went wrong." },
        ];
        setChatLog(errorChatLog);
        saveChatLogToLocalStorage(errorChatLog);
      } finally {
        setLoading(false);
      }
    };

    //stop
  
    // Placeholder for speech-to-text conversion
    const handleSpeechInput = () => {
      console.log("Start speech-to-text conversion...");
      // Implement speech-to-text functionality here
    };
  
    // Placeholder for file input handling
    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Selected file:", file);
        // Handle file upload logic
      }
    };
  
    // Change language for multilingual support
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLanguage(e.target.value);
    };
  
    return (
      <>
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            className="bg-blue-600 w-16 h-16 rounded-full shadow-lg text-white flex items-center justify-center hover:bg-blue-700 focus:outline-none"
            onClick={toggleChat}
          >
            {isOpen ? <FaTimes size={24} /> : <FaCommentAlt size={24} />}
          </Button>
        </div>
  
        {isOpen && (
          <div className="fixed bottom-28 right-6 z-50 w-96 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-800 p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Chatbot</h2>
              <select
                className="bg-blue-950 text-white rounded-md px-2 py-2 text-sm w-52 p-4"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                {languages.map((lang) => (
                  <option key={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
  
            <div className="p-4 flex-grow h-96 overflow-y-auto">
              {chatLog.map((chat, index) => (
                <div
                  key={index}
                  className={mb-4 ${chat.sender === "user" ? "text-right" : "text-left"}}
                >
                  <p
                    className={`${
                      chat.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    } inline-block p-2 rounded-md`}
                  >
                    {chat.message}
                  </p>
                </div>
              ))}
              {loading && (
                <div className="text-gray-500 text-center">
                  Bot is responding...
                </div>
              )}
            </div>
  
            <div className="p-4 bg-gray-800 flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow p-2 rounded bg-gray-700 text-white focus:outline-none"
              />
  
              <FaMicrophone
                onClick={handleSpeechInput}
                className="text-white cursor-pointer hover:text-blue-500"
                size={24}
              />
  
              <label className="cursor-pointer">
                <FaPaperclip size={24} className="text-white hover:text-blue-500" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </label>
  
              <Button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>
        )}
      </>
    );
  };