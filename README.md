# 🤖 AI Chatbot – React + Vite + TailwindCSS

A modern **AI Chatbot UI** built using **React**, **Vite**, and **TailwindCSS**, featuring **Markdown rendering**, **auto-scroll**, and a clean chat interface similar to ChatGPT.

---

## ✨ Features

* ⚡ Fast development with **Vite**
* 🎨 Modern UI with **TailwindCSS**
* 💬 Chat-style interface (user & bot messages)
* 📝 **Markdown support** (bold, lists, tables, code blocks)
* 📜 Auto-scroll to latest message
* ⌨️ Send message with **Enter key**
* 🔗 Ready for OpenAI API integration

---

## 🛠 Tech Stack

* **React**
* **Vite**
* **TailwindCSS**
* **react-markdown**
* **remark-gfm**
* **rehype-highlight**
* **Axios**

---

## 📁 Project Structure

```
src/
├── components/
│   └── Chat.jsx
├── hooks/
│   ├── useChatbot.js
│   └── useChatScroll.js
├── App.jsx
├── main.jsx
├── index.css
tailwind.config.js
postcss.config.js
vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mahmudulmadu/AI-Chatbot-openai-react.git
cd your-repo-name
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🎨 TailwindCSS Setup (Required)

If UI looks broken, ensure Tailwind is installed correctly.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**tailwind.config.js**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 📝 Markdown Support Examples

The chatbot supports GitHub-flavored markdown:

````md
**Bold Text**
_Italic Text_

- List item
- Another item

| Name | Age |
| ---- | --- |
| John | 25 |

```js
console.log("Code block supported!");
````

````

---

## 🔐 OpenAI API Integration

In `useChatbot.js`, add your OpenAI API key:

```js
headers: {
  Authorization: `Bearer YOUR_OPENAI_API_KEY`,
  "Content-Type": "application/json",
}
````

⚠️ **Do NOT expose API keys in production**
Use environment variables or a backend proxy.

---


---

## 🧠 Future Improvements

* 🌙 Dark mode
* ⏳ Typing animation
* 🔄 Streaming responses
* 💾 Chat history persistence
* 🔒 Backend proxy for API security

---

## 📄 License

MIT License © 2025

---

## 👨‍💻 Author

**Mahmudul Hasan**
Frontend / Full‑Stack Developer

---

⭐ If you like this project, don’t forget to **star the repo**!
