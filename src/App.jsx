import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Riders from './components/Riders'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

const PROJECT_ID = 'b22b220e-f6a0-40a1-a203-6a69e21f00a0'
const API = 'https://api.jpsdeveloper.com'

function initTracker() {
  const sid = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
  const send = (event_type, metadata = {}) => {
    fetch(`${API}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_id: PROJECT_ID, session_id: sid, event_type, metadata: { url: location.href, ...metadata } }),
    }).catch(() => {})
  }
  send('pageview')
  const fired = new Set()
  window.addEventListener('scroll', () => {
    const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    ;[25, 50, 75, 100].forEach(t => { if (pct >= t && !fired.has(t)) { fired.add(t); send(`scroll_${t}`) } })
  })
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-track]')
    if (btn) send('cta_click', { text: btn.textContent.trim().slice(0, 50) })
  })
  window.__trackEvent = send
}

export default function App() {
  useEffect(() => { initTracker() }, [])
  return (
    <div className="min-h-screen bg-bg-dark text-white antialiased">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Riders />
      <WaitlistForm />
      <Footer />
    </div>
  )
}
