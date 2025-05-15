
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  type: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      type: 'assistant', 
      text: "Hi there! I'm your Public Health Solutions assistant. How can I help you today?", 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate assistant response after a short delay
    setTimeout(() => {
      let response = "I understand you need help. Let me connect you with the right resources. You can also call us at (646) 619-6400 for immediate assistance.";
      
      // Simple response logic based on keywords
      const lowercaseInput = input.toLowerCase();
      if (lowercaseInput.includes('appointment') || lowercaseInput.includes('schedule')) {
        response = "To schedule an appointment, you can call us at (646) 619-6400 or fill out our online form on the Contact page.";
      } else if (lowercaseInput.includes('wic') || lowercaseInput.includes('food')) {
        response = "We offer WIC and food assistance programs. You can find more information on our Nutrition & Food Support page or call us to check your eligibility.";
      } else if (lowercaseInput.includes('insurance') || lowercaseInput.includes('medicaid')) {
        response = "We can help you navigate health insurance options, including Medicaid. Visit our Healthcare Access page or call us for personalized assistance.";
      }

      const assistantMessage: Message = {
        id: messages.length + 2,
        type: 'assistant',
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat button */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary-blue hover:bg-primary-blue/90 z-50"
        onClick={toggleChat}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-gentle-pulse" />
        )}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[450px] max-h-[calc(100vh-11rem)] shadow-xl z-50 flex flex-col animate-fade-in">
          <CardHeader className="bg-primary-blue text-white py-3 px-4 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg" alt="PHS" />
                <AvatarFallback>PHS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">Health Assistant</h3>
                <p className="text-xs opacity-75">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary-blue/50" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-auto p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-primary-blue text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="border-t p-3">
            <form onSubmit={handleSubmit} className="flex w-full">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" size="icon" className="bg-primary-blue hover:bg-primary-blue/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ChatAssistant;
