import { useState } from "react";
import axios from "axios";


export default function useChatbot() {
const [messages, setMessages] = useState([]);


const sendMessage = async (text) => {
const newMessages = [...messages, { text, sender: "user" }];
setMessages(newMessages);
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

try {
const res = await axios.post(
"https://api.openai.com/v1/chat/completions",
{
model: "gpt-4o-mini",
messages: [{ role: "user", content: text }],
},
{
headers: {
Authorization: `Bearer ${OPENAI_API_KEY}`,
"Content-Type": "application/json",
},
}
);


const botText = res.data.choices[0].message.content;


setMessages([...newMessages, { text: botText, sender: "bot" }]);
} catch (err) {
setMessages([
...newMessages,
{ text: "Error: Unable to connect to AI.", sender: "bot" },
]);
}
};


return { messages, sendMessage };
}