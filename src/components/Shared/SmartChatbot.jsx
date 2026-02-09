import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaMicrophone,
  FaVolumeUp,
  FaUser,
  FaSpinner
} from 'react-icons/fa';

const SmartChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm EduBot, your AI assistant. I can help you with academics, attendance, fees, and more! How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const quickActions = [
    { text: "Check my attendance", action: "attendance" },
    { text: "Upcoming assignments", action: "assignments" },
    { text: "Fee payment status", action: "fees" },
    { text: "Exam schedule", action: "exams" },
    { text: "Contact faculty", action: "faculty" }
  ];

  const botResponses = {
    attendance: "Your current attendance is 89%. You need to attend 2 more classes in Physics to maintain 75% minimum attendance. Would you like me to show your subject-wise breakdown?",
    assignments: "You have 3 pending assignments: 1) Data Structures (Due: Jan 15), 2) Database Project (Due: Jan 18), 3) Networks Lab (Due: Jan 22). Need help with any specific assignment?",
    fees: "Your fee status: ₹75,000 paid out of ₹1,25,000 total. Next installment of ₹50,000 is due on Feb 15, 2024. Would you like payment options?",
    exams: "Upcoming exams: Mid-term Data Structures (Jan 15), Database Assignment submission (Jan 18), Networks Lab Exam (Jan 22). Need study materials?",
    faculty: "Here are your faculty contacts: Dr. Smith (Data Structures) - smith@college.edu, Prof. Johnson (Database) - johnson@college.edu. Would you like me to draft an email?",
    default: "I understand you're asking about that. Let me help you find the right information. Could you be more specific about what you need?"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userText) => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('attendance')) return botResponses.attendance;
    if (lowerText.includes('assignment') || lowerText.includes('homework')) return botResponses.assignments;
    if (lowerText.includes('fee') || lowerText.includes('payment')) return botResponses.fees;
    if (lowerText.includes('exam') || lowerText.includes('test')) return botResponses.exams;
    if (lowerText.includes('faculty') || lowerText.includes('teacher') || lowerText.includes('professor')) return botResponses.faculty;
    if (lowerText.includes('hello') || lowerText.includes('hi')) return "Hello! How can I help you today? You can ask me about attendance, assignments, fees, exams, or faculty contacts.";
    if (lowerText.includes('help')) return "I can help you with: ✅ Attendance tracking ✅ Assignment deadlines ✅ Fee payments ✅ Exam schedules ✅ Faculty contacts ✅ Academic calendar. What would you like to know?";
    
    return botResponses.default;
  };

  const handleQuickAction = (action) => {
    handleSendMessage(quickActions.find(qa => qa.action === action)?.text);
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      setIsListening(true);
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaRobot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">EduBot Assistant</h3>
                <p className="text-xs opacity-90">Online • AI-Powered</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <FaUser size={12} /> : <FaRobot size={12} />}
                    </div>
                    <div className={`rounded-2xl p-3 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      {message.sender === 'bot' && (
                        <button
                          onClick={() => speakText(message.text)}
                          className="mt-2 text-xs opacity-70 hover:opacity-100 flex items-center gap-1"
                        >
                          <FaVolumeUp size={10} /> Listen
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <FaRobot size={12} className="text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t bg-gray-50">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickActions.slice(0, 3).map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs bg-white border rounded-full px-3 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={startVoiceRecognition}
                  className={`p-2 rounded-full ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-gray-300 transition-colors`}
                >
                  <FaMicrophone size={16} />
                </button>
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SmartChatbot;