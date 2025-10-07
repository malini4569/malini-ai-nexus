import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Mini Mal — your friendly AI twin 💬 Ask me about Malini's projects, skills, or how to connect with her.",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const responses: { [key: string]: string } = {
    projects: "Malini has worked on exciting projects including Automated Weather Classification with IBM, Jetson AI Prototype, Power BI Business Dashboard, Android Apps, and AI Chatbot Assistants. Would you like to know more about any specific project?",
    skills: "Malini is proficient in Python, Java, HTML, CSS, JavaScript, SQL, Power BI, Cloud Technologies, TensorFlow, NumPy, Pandas, Scikit-learn, and Matplotlib. She's passionate about AI and Data Science!",
    experience: "Malini is currently an AI Programmer Trainee at Cultus Education (Aug 2025-Present). She's also been a Google Cloud Arcade Facilitator, Data Science Intern at Pantechelearning, Android Developer at Gateway Software, and Cyber Security Intern at Quantum Learnings.",
    education: "Malini completed her B.E. in Electronics and Communication Engineering from Dr. Sivanthi Aditanar College of Engineering, Thoothukudi (2020-2024). She actively participated in intercollege and IEEE events.",
    contact: "You can reach Malini via email or connect with her on LinkedIn, GitHub, Instagram, or Twitter. Check out the Contact section below to send her a message directly!",
    certifications: "Malini has earned certifications from Neo4j, IBM, Google (Generative AI), NPTEL, Edunet, Skill Nation (Power BI), Jetson AI, and more. She's constantly learning and growing!",
    default: "That's a great question! I can tell you about Malini's projects, skills, experience, education, certifications, or how to contact her. What would you like to know?",
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("project")) return responses.projects;
    if (lowerInput.includes("skill")) return responses.skills;
    if (lowerInput.includes("experience") || lowerInput.includes("work")) return responses.experience;
    if (lowerInput.includes("education") || lowerInput.includes("college")) return responses.education;
    if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email")) return responses.contact;
    if (lowerInput.includes("certificate") || lowerInput.includes("achievement")) return responses.certifications;
    
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-glow gradient-primary hover:scale-110 transition-smooth z-50"
          size="icon"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-card z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="gradient-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <h3 className="font-semibold font-poppins">Mini Mal</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? "bg-card text-card-foreground shadow-soft"
                      : "gradient-primary text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="gradient-primary"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
