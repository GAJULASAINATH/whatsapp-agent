'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, Phone, Video, ChevronLeft } from 'lucide-react';

const messages = [
    { id: 1, text: "Hi! I'd like to book an appointment for a hearing test.", sender: 'user', delay: 1000 },
    { id: 2, text: "Hello! 👋 I can help with that. When would you like to come in?", sender: 'bot', delay: 2500 },
    { id: 3, text: "Is tomorrow at 4 PM available?", sender: 'user', delay: 4000 },
    { id: 4, text: "Let me check... 📅 Yes, 4:00 PM tomorrow is available. Shall I confirm it?", sender: 'bot', delay: 5500 },
    { id: 5, text: "Yes please!", sender: 'user', delay: 7000 },
    { id: 6, text: "Great! Booking confirmed for tomorrow at 4:00 PM. ✅ We'll see you then!", sender: 'bot', delay: 8500 }
];

export default function WhatsAppMockup() {
    const [visibleMessages, setVisibleMessages] = useState<any[]>([]);

    useEffect(() => {
        let timeoutIds: NodeJS.Timeout[] = [];

        // Reset and play animation loop
        const playAnimation = () => {
            setVisibleMessages([]);
            timeoutIds = [];

            messages.forEach((msg) => {
                const timeoutId = setTimeout(() => {
                    setVisibleMessages((prev) => [...prev, msg]);
                }, msg.delay);
                timeoutIds.push(timeoutId);
            });

            // Loop after the last message + some pause
            const loopTimeout = setTimeout(() => {
                playAnimation();
            }, 12000);
            timeoutIds.push(loopTimeout);
        };

        playAnimation();

        return () => timeoutIds.forEach(clearTimeout);
    }, []);

    return (
        <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
                {/* Header */}
                <div className="wa-header">
                    <div className="wa-header-left">
                        <ChevronLeft size={24} color="#007AFF" />
                        <div className="wa-avatar">
                            <div className="wa-avatar-img">AI</div>
                        </div>
                        <div className="wa-contact-info">
                            <span className="wa-name">Isha Hearing AI</span>
                            <span className="wa-status">online</span>
                        </div>
                    </div>
                    <div className="wa-header-right">
                        <Video size={20} color="#007AFF" />
                        <Phone size={20} color="#007AFF" />
                    </div>
                </div>

                {/* Chat Area */}
                <div className="wa-chat-area">
                    <AnimatePresence>
                        {visibleMessages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`wa-message ${msg.sender === 'user' ? 'wa-message-user' : 'wa-message-bot'}`}
                            >
                                {msg.text}
                                <span className="wa-time">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="wa-input-area">
                    <div className="wa-input-plus">+</div>
                    <div className="wa-input-box"></div>
                    <div className="wa-input-mic">
                        <Send size={18} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}
