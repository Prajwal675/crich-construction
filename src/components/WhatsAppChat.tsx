import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "917996116299";

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hello! I'm interested in Crich Constructions services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg mb-4 w-72 overflow-hidden animate-fade-in">
          <div className="bg-green-500 text-white p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Chat with us</h3>
              <button 
                onClick={toggleChat}
                className="text-white hover:bg-green-600 rounded-full p-1"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm mt-1">We typically reply within minutes</p>
          </div>
          
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              Need assistance with your construction project? Chat with our experts now!
            </p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center font-medium transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chat
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 animate-bounce"
        aria-label="WhatsApp Chat"
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;
