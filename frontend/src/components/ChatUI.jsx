// import { useState } from "react";

// export default function ChatUI() {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "ai", text: "Hello 👋 I'm your coding assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input })
//       });

//       const data = await res.json();

//       const aiMessage = { id: Date.now() + 1, sender: "ai", text: data.reply };
//       setMessages((prev) => [...prev, aiMessage]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, sender: "ai", text: "⚠️ Error connecting to AI service." }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 text-lg font-bold shadow-md">
//         💬 CodeAssist
//       </header>

//       {/* Messages */}
//       <main className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
//                 msg.sender === "user"
//                   ? "bg-blue-600 text-white rounded-br-none"
//                   : "bg-white text-gray-800 rounded-bl-none"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <div className="flex justify-start">
//             <div className="bg-white px-4 py-2 rounded-2xl shadow text-gray-500 italic">
//               Typing...
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Input */}
//       <footer className="p-4 bg-white border-t flex items-center gap-2">
//         <input
//           type="text"
//           className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// }
