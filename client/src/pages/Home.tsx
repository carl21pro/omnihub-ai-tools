import { Link } from 'wouter'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🚀</span>
            <h1 className="text-2xl font-bold text-cyan-400">OmniHub AI</h1>
          </div>
          <Link href="/tools">
            <a className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">
              Launch Tools
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          9 Powerful AI Tools
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          All-in-one platform with AI chatbots, image generation, weather, currency conversion, QR codes, and more.
        </p>
        <Link href="/tools">
          <a className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-bold text-lg transition-colors">
            Get Started →
          </a>
        </Link>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI Chatbots</h3>
            <p className="text-slate-400">DeepSeek and GPT-OSS for intelligent conversations</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Image Generator</h3>
            <p className="text-slate-400">Create stunning images from text descriptions</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
            <div className="text-4xl mb-4">🌤️</div>
            <h3 className="text-xl font-bold mb-2">Weather & More</h3>
            <p className="text-slate-400">Weather, currency, QR codes, and utilities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-400">
        <p>&copy; 2026 OmniHub AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
