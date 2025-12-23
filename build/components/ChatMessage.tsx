import React, { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Message, Role } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAi = message.role === Role.AI;
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAi && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isAi, message.text]);

  return (
    <div 
      ref={isAi ? messageRef : null}
      className={`flex w-full mb-4 ${isAi ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[88%] rounded-[1.5rem] px-4 py-3.5 shadow-sm transition-colors duration-300 ${
        isAi 
          ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700' 
          : 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/20'
      }`}>
        <div className={`text-sm leading-relaxed prose prose-sm max-w-none ${isAi ? 'text-slate-800 dark:text-slate-100' : 'text-white'}`}>
          {isAi ? (
            <ReactMarkdown>{message.text}</ReactMarkdown>
          ) : (
            <p className="whitespace-pre-wrap font-medium">{message.text}</p>
          )}
        </div>
        <div className={`text-[9px] mt-2 font-bold uppercase tracking-wider opacity-50 text-right ${isAi ? 'text-slate-500 dark:text-slate-400' : 'text-blue-100'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;