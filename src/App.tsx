import { useState, useEffect, useCallback } from 'react'
import { Keyboard } from 'lucide-react'


import { projects } from './data/portfolio'
import { SlideNav } from './components/SlideNav'
import { ProjectSlide } from './components/ProjectSlide'
import { CoverSlide } from './components/CoverSlide'

const TOTAL = 1 + projects.length

export default function App() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return
    setDirection(index > current ? 'next' : 'prev')
    setAnimating(true)
    setTimeout(() => { setCurrent(index); setAnimating(false) }, 420)
  }, [current, animating])

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo])
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slideStyle: React.CSSProperties = {
    transition: 'opacity 0.42s ease, transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)',
    opacity: animating ? 0 : 1,
    transform: animating ? (direction === 'next' ? 'translateX(-32px)' : 'translateX(32px)') : 'translateX(0)',
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#0D1117]">
      <div className="w-full h-full" style={slideStyle}>
        {current === 0
          ? <CoverSlide />
          : <ProjectSlide project={projects[current - 1]} slideNumber={current} />
        }
      </div>
      <SlideNav total={TOTAL} current={current} onNext={next} onPrev={prev} onGoto={goTo} />
      <KeyboardHint />
    </div>
  )
}

function KeyboardHint() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const t = setTimeout(() => setVisible(false), 3500); return () => clearTimeout(t) }, [])
  return (
    <div
      className="fixed top-5 right-6 z-50 flex items-center gap-2 px-3 py-1.5 bg-[#161b22]/80 border border-[#30363d] rounded-lg backdrop-blur-sm text-gray-500 text-xs font-mono transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: 'none' }}
    >
      <Keyboard size={13} />
      Use ← → ou Espaço para navegar
    </div>
  )
}