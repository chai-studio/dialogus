---
title: "Dialogus"
date: 2025-07-29
tags: [AI, reading, CHAI studio, education]
---

# Dialogus 小书童

**Dialogus** is a humanistic AI reading companion designed to guide students through deep, reflective, and dialogic engagement with course texts.

Inspired by the traditions of **Socratic questioning**, **Confucian self-cultivation**, and **Zhuangzi’s imaginative freedom**, Dialogus supports learners as they:

- 🌱 Discover context and meaning before reading
- 🧠 Receive adaptive questions that promote critical thinking
- 📚 Ask for help when confused, bored, or distracted
- ✍️ Reflect with post-reading synthesis and seminar prep prompts

---

## 🔍 Features (MVP)

- Upload or paste course readings (PDF or plain text)
- Personalized question prompts before, during, and after reading
- Socratic-style dialogue powered by GPT
- Save your learning history and export your transcript

---

## 🌿 Coming Soon

- **Kong Wen (空问) Mode** — Zen-inspired reflective questioning style
- Scroll-style UI with dual-pane reading and commentary
- Instructor dashboard with prompt templates and knowledge tree

---

## 🚀 Getting Started

1. Clone this repository
2. *(Optional for MVP)* Add your OpenAI API key
3. Open `index.html` in your browser to test locally

If using Node/Python stack (future version):

```bash
npm install         # or pip install -r requirements.txt
npm run dev         # or flask run
```

---

## 🗂 Folder Structure

```bash
dialogus-mvp/
├── index.html              # Main HTML interface
├── style.css               # UI styling
├── main.js                 # Core dialog logic (simulated GPT for now)
├── prompts/
│   └── default_prompt.md   # Default system prompt for GPT
├── config/
│   └── course_config.json  # Instructor-defined teaching context
├── docs/
│   └── dialogus-prd.md     # Full Product Requirements Document (PRD)
├── assets/
│   └── images/             # UI assets (optional)
└── .gitattributes          # Cross-platform line ending config
```

---

## 🌐 Live Demo

> Coming soon via GitHub Pages

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 CHAI Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

🪶 Made with care by **CHAI Studio** — where ancient scrolls meet future schools.
