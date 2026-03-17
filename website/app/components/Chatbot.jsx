"use client";

import { useState } from "react";

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
            // Add AI response logic here
        }
    };

    return (
        <div className="fixed bottom-6 left-6 bg-gray-900 p-4 rounded-xl w-80 shadow-lg">
            <p className="text-sm mb-2 font-semibold">AI Assistant</p>

            <div className="bg-black rounded h-64 overflow-y-auto mb-2 p-2">
                {messages.map((msg, idx) => (
                    <p
                        key={idx}
                        className={`text-sm mb-2 ${
                            msg.sender === "user" ? "text-blue-400" : "text-gray-300"
                        }`}
                    >
                        {msg.text}
                    </p>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Vraag iets..."
                    className="p-2 bg-black rounded text-white flex-1 text-sm"
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-600 rounded text-white text-sm hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
}