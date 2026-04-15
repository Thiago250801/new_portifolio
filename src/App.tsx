import { useState, useEffect, useCallback, useRef, type CSSProperties } from 'react'
import { Keyboard, Smartphone } from 'lucide-react'

import { projects } from './data/portfolio'
import { SlideNav } from './components/SlideNav'
import { ProjectSlide } from './components/ProjectSlide'
import { CoverSlide } from './components/CoverSlide'

const TOTAL = 1 + projects.length
const TOUCH_LAYOUT_QUERY = '(max-width: 1024px), (pointer: coarse)'
const TAP_MOVE_TOLERANCE = 12

function useIsTouchLayout() {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(TOUCH_LAYOUT_QUERY)
    const updateMatches = () => setMatches(mediaQuery.matches)

    updateMatches()
    mediaQuery.addEventListener('change', updateMatches)

    return () => mediaQuery.removeEventListener('change', updateMatches)
  }, [])

  return matches
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false

  return Boolean(
    target.closest(
      'a, button, input, textarea, select, summary, video, iframe, [role="button"], [data-prevent-slide-tap]',
    ),
  )
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const isTouchLayout = useIsTouchLayout()
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return

    setDirection(index > current ? 'next' : 'prev')
    setAnimating(true)
    window.setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 420)
  }, [current, animating])

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo])
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!isTouchLayout || event.pointerType === 'mouse' || isInteractiveTarget(event.target)) {
      pointerStartRef.current = null
      return
    }

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    }
  }, [isTouchLayout])

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!isTouchLayout || event.pointerType === 'mouse' || isInteractiveTarget(event.target)) {
      pointerStartRef.current = null
      return
    }

    const start = pointerStartRef.current
    pointerStartRef.current = null

    if (!start) return

    const deltaX = Math.abs(event.clientX - start.x)
    const deltaY = Math.abs(event.clientY - start.y)
    if (deltaX > TAP_MOVE_TOLERANCE || deltaY > TAP_MOVE_TOLERANCE) return

    if (event.clientX >= window.innerWidth / 2) {
      next()
      return
    }

    prev()
  }, [isTouchLayout, next, prev])

  const slideStyle: CSSProperties = {
    transition: 'opacity 0.42s ease, transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)',
    opacity: animating ? 0 : 1,
    transform: animating
      ? direction === 'next'
        ? 'translateX(-32px)'
        : 'translateX(32px)'
      : 'translateX(0)',
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0D1117]">
      <div
        className="h-full w-full"
        style={slideStyle}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartRef.current = null
        }}
      >
        {current === 0
          ? <CoverSlide />
          : <ProjectSlide project={projects[current - 1]} slideNumber={current} />
        }
      </div>

      <SlideNav total={TOTAL} current={current} onNext={next} onPrev={prev} onGoto={goTo} />
      <NavigationHint isTouchLayout={isTouchLayout} />
    </div>
  )
}

function NavigationHint({ isTouchLayout }: { isTouchLayout: boolean }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 3500)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div
      className="fixed top-5 right-6 z-50 flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#161b22]/80 px-3 py-1.5 font-mono text-xs text-gray-500 backdrop-blur-sm transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: 'none' }}
    >
      {isTouchLayout ? <Smartphone size={13} /> : <Keyboard size={13} />}
      {isTouchLayout ? 'Toque na esquerda ou direita para navegar ou use as setas ← →' : 'Use ← → ou Espaço para navegar'}
    </div>
  )
}
