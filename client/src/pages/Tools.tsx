import { useState } from 'react'
import { Link } from 'wouter'
import { TOOLS, TOOL_CATEGORIES } from '../../tools-config'
import { Send, Loader2, Copy } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(TOOLS[0])
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All Tools')
  const [result, setResult] = useState<any>(null)

  const filteredTools =
    selectedCategory === 'All Tools'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === selectedCategory)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      let response
      let data

      if (selectedTool.id === 'deepseek-chat') {
        response = await fetch(
          `${selectedTool.apiEndpoint}?prompt=${encodeURIComponent(input)}&system=You are a helpful AI assistant&temperature=0.7`
        )
        data = await response.json()
      } else if (selectedTool.id === 'gptoss-chat') {
        response = await fetch(
          `${selectedTool.apiEndpoint}?prompt=${encodeURIComponent(input)}&system=You are a helpful AI assistant&temperature=0.7`
        )
        data = await response.json()
      } else if (selectedTool.id === 'poli-image') {
        response = await fetch(`${selectedTool.apiEndpoint}?prompt=${encodeURIComponent(input)}`)
        data = await response.json()
        setResult({ type: 'image', url: data.image_url || data.url })
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: '🎨 Image generated successfully!',
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'bible-verse') {
        response = await fetch(selectedTool.apiEndpoint)
        data = await response.json()
        const assistantMessage = `📖 ${data.reference}\n\n"${data.text}"\n\n— ${data.translation_name}`
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: assistantMessage,
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'screenshot') {
        response = await fetch(`${selectedTool.apiEndpoint}?url=${encodeURIComponent(input)}`)
        data = await response.json()
        setResult({ type: 'image', url: data.screenshotURL })
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: '📸 Screenshot captured successfully!',
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'weather-ph') {
        const cityCoords: Record<string, [number, number]> = {
          manila: [14.5995, 120.9842],
          cebu: [10.3157, 123.8854],
          davao: [7.0731, 125.6126],
          baguio: [16.4023, 120.5960],
        }
        const city = input.toLowerCase().split(' ')[0]
        const coords = cityCoords[city] || cityCoords.manila
        response = await fetch(
          `${selectedTool.apiEndpoint}?latitude=${coords[0]}&longitude=${coords[1]}&current_weather=true`
        )
        data = await response.json()
        const weather = data.current_weather
        const assistantMessage = `🌤️ Weather:\nTemp: ${weather.temperature}°C\nWind: ${weather.wind_speed} km/h`
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: assistantMessage,
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'currency-converter') {
        const baseCurrency = input.split(' ')[0].toUpperCase() || 'USD'
        response = await fetch(`${selectedTool.apiEndpoint}/${baseCurrency}`)
        data = await response.json()
        const rates = data.conversion_rates
        const assistantMessage = `💱 Exchange Rates:\n${Object.entries(rates)
          .slice(0, 5)
          .map(([code, rate]) => `${code}: ${rate}`)
          .join('\n')}`
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: assistantMessage,
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'qr-generator') {
        response = await fetch(
          `${selectedTool.apiEndpoint}?size=300x300&data=${encodeURIComponent(input)}`
        )
        setResult({ type: 'image', url: response.url })
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: '📱 QR code generated!',
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      } else if (selectedTool.id === 'url-shortener') {
        response = await fetch(`${selectedTool.apiEndpoint}?url=${encodeURIComponent(input)}`)
        data = await response.json()
        setResult({ type: 'text', url: data.shorturl })
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `🔗 ${data.shorturl}`,
            timestamp: new Date(),
          },
        ])
        setLoading(false)
        return
      }

      const assistantMessage = data.response || 'Done!'
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: assistantMessage,
          timestamp: new Date(),
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '❌ Error: Failed to process request',
          timestamp: new Date(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-cyan-400">OmniHub AI</span>
            </a>
          </Link>
          <span className="text-slate-400">9 Tools Ready</span>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold mb-3">Categories</h3>
                <div className="space-y-2">
                  {TOOL_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {filteredTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setSelectedTool(tool)
                      setMessages([])
                      setResult(null)
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedTool.id === tool.id
                        ? `bg-gradient-to-r ${tool.color} text-white`
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    <div className="text-2xl mb-1">{tool.icon}</div>
                    <div className="font-semibold text-sm">{tool.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-lg overflow-hidden flex flex-col h-[600px]">
              {/* Tool Header */}
              <div className={`bg-gradient-to-r ${selectedTool.color} text-white p-6`}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedTool.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedTool.name}</h2>
                    <p className="text-sm opacity-90">{selectedTool.description}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <span className="text-6xl mb-4">{selectedTool.icon}</span>
                    <h3 className="text-xl font-bold mb-4">Try {selectedTool.name}</h3>
                    <div className="space-y-2 w-full max-w-md">
                      {selectedTool.examples.map((example, idx) => (
                        <button
                          key={idx}
                          onClick={() => setInput(example)}
                          className="w-full text-left p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-all"
                        >
                          💡 {example}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-xs px-4 py-3 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-cyan-500 text-white'
                              : 'bg-slate-700 text-slate-100'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex justify-start">
                        <div className="bg-slate-700 px-4 py-3 rounded-lg">
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {result && (
                  <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                    {result.type === 'image' ? (
                      <img src={result.url} alt="Result" className="w-full rounded-lg max-h-96 object-cover" />
                    ) : (
                      <div className="flex items-center justify-between">
                        <code className="text-sm break-all">{result.url}</code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(result.url)
                            alert('Copied!')
                          }}
                          className="ml-2 p-2 hover:bg-slate-600 rounded"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-slate-700 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage()
                      }
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading || !input.trim()}
                    className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

