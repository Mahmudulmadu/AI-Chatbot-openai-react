import React from "react";
import Chat from "./component/Chat";


export default function App() {
return (
<div className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
<div className="w-full max-w-lg bg-white shadow-xl rounded-2xl overflow-hidden">
<Chat />
</div>
</div>
);
}