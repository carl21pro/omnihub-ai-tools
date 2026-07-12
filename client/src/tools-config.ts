export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  examples: string[];
  apiEndpoint: string;
  type: 'chat' | 'image' | 'utility' | 'weather';
}

export const TOOLS: Tool[] = [
  {
    id: 'deepseek-chat',
    name: 'DeepSeek AI Chat',
    category: 'AI Chatbot',
    description: 'Advanced AI chatbot for conversations, questions, and creative writing',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    examples: [
      'Explain quantum computing in simple terms',
      'Write a funny joke about programming',
      'Help me debug this JavaScript code',
      'What are the benefits of meditation?',
    ],
    apiEndpoint: 'https://jonell.ccprojects.gleeze.com/api/deepseek',
    type: 'chat',
  },
  {
    id: 'gptoss-chat',
    name: 'GPT-OSS Chat',
    category: 'AI Chatbot',
    description: 'Open-source AI model for general conversations and assistance',
    icon: '💬',
    color: 'from-purple-500 to-pink-500',
    examples: [
      'Tell me about the history of the internet',
      'How do I make a perfect cup of coffee?',
      'Explain machine learning like I\'m 5',
      'What\'s the best way to learn programming?',
    ],
    apiEndpoint: 'https://jonell.ccprojects.gleeze.com/api/gptoss',
    type: 'chat',
  },
  {
    id: 'poli-image',
    name: 'Image Generator',
    category: 'AI Image',
    description: 'Generate stunning images from text descriptions using AI',
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
    examples: [
      'A serene landscape with mountains and lake',
      'Futuristic city with neon lights',
      'Cute cat wearing sunglasses',
      'Abstract art with vibrant colors',
    ],
    apiEndpoint: 'https://jonell.ccprojects.gleeze.com/api/poli',
    type: 'image',
  },
  {
    id: 'bible-verse',
    name: 'Random Bible Verse',
    category: 'Inspiration',
    description: 'Get random Bible verses for daily inspiration and reflection',
    icon: '📖',
    color: 'from-amber-500 to-yellow-500',
    examples: [
      'Get a random verse',
      'Verse about hope',
      'Verse about love',
      'Verse about strength',
    ],
    apiEndpoint: 'https://jonell.ccprojects.gleeze.com/api/randomverse',
    type: 'utility',
  },
  {
    id: 'screenshot',
    name: 'Website Screenshot',
    category: 'Utility',
    description: 'Capture screenshots of any website URL',
    icon: '📸',
    color: 'from-green-500 to-emerald-500',
    examples: [
      'https://www.google.com',
      'https://www.github.com',
      'https://www.youtube.com',
      'https://www.wikipedia.org',
    ],
    apiEndpoint: 'https://jonell.ccprojects.gleeze.com/api/screenshot',
    type: 'utility',
  },
  {
    id: 'weather-ph',
    name: 'Philippines Weather',
    category: 'Weather',
    description: 'Get current weather for any location in the Philippines',
    icon: '🌤️',
    color: 'from-sky-500 to-blue-500',
    examples: [
      'Manila weather',
      'Cebu weather',
      'Davao weather',
      'Baguio weather',
    ],
    apiEndpoint: 'https://api.open-meteo.com/v1/forecast',
    type: 'weather',
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    category: 'Finance',
    description: 'Convert between different currencies with real-time rates',
    icon: '💱',
    color: 'from-green-500 to-teal-500',
    examples: [
      'USD to PHP',
      'EUR to PHP',
      'JPY to PHP',
      'GBP to USD',
    ],
    apiEndpoint: 'https://v6.exchangerate-api.com/v6/latest',
    type: 'utility',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    category: 'Utility',
    description: 'Generate QR codes from text or URLs',
    icon: '📱',
    color: 'from-indigo-500 to-purple-500',
    examples: [
      'https://github.com',
      'Contact information',
      'WiFi credentials',
      'Event details',
    ],
    apiEndpoint: 'https://api.qrserver.com/v1/create-qr-code/',
    type: 'utility',
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    category: 'Utility',
    description: 'Shorten long URLs for easy sharing',
    icon: '🔗',
    color: 'from-rose-500 to-pink-500',
    examples: [
      'https://www.example.com/very/long/url/path',
      'https://github.com/username/repository',
      'https://www.wikipedia.org/wiki/Article',
      'Your custom long URL here',
    ],
    apiEndpoint: 'https://tinyurl.com/api-create.php',
    type: 'utility',
  },
];

export const TOOL_CATEGORIES = [
  'All Tools',
  'AI Chatbot',
  'AI Image',
  'Weather',
  'Finance',
  'Utility',
  'Inspiration',
];

