# OmniHub AI Tools

A fully functional AI-powered tools platform with 9 integrated APIs.

## 🚀 Features

- **🤖 AI Chatbots** - DeepSeek and GPT-OSS for intelligent conversations
- **🎨 Image Generator** - Create stunning images from text prompts
- **📖 Bible Verses** - Daily inspiration and reflection
- **📸 Website Screenshots** - Capture any website instantly
- **🌤️ Weather** - Real-time Philippines weather data
- **💱 Currency Converter** - Live exchange rates
- **📱 QR Code Generator** - Create QR codes from text/URLs
- **🔗 URL Shortener** - Shorten long URLs
- **💬 Beautiful Chat UI** - Modern, responsive interface

## 🛠️ Tech Stack

- React 19
- Tailwind CSS 4
- TypeScript
- Vite
- Wouter (lightweight routing)

## 📦 Installation

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/omnihub-ai-tools.git
cd omnihub-ai-tools

omnihub-ai-tools/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ui/
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── textarea.tsx
│   │   │       └── ... (other shadcn/ui components)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Tools.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── tools-config.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
├── README.md
└── tailwind.config.ts


