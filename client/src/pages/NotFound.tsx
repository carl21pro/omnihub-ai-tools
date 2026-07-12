import { Link } from 'wouter'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <p className="text-2xl text-slate-300 mb-8">Page not found</p>
        <Link href="/">
          <a className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  )
}

