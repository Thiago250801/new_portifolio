import { useState, useEffect, useCallback } from 'react'
import { Keyboard, Smartphone } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from 'framer-motion'

import { projects } from './data/portfolio'
import { SlideNav } from './components/SlideNav'
import { ProjectSlide } from './components/ProjectSlide'
import { CoverSlide } from './components/CoverSlide'

const TOTAL = 1 + projects.length
const SWIPE_OFFSET_THRESHOLD = 72
const SWIPE_VELOCITY_THRESHOLD = 520
const TOUCH_LAYOUT_QUERY = '(max-width: 1024px), (pointer: coarse)'

function clampIndex(index: number) {
  return Math.min(Math.max(index, 0), TOTAL - 1)
}

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

export default function App() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const isTouchLayout = useIsTouchLayout()
  const prefersReducedMotion = useReducedMotion()

  const goTo = useCallback((index: number) => {
    const target = clampIndex(index)
    if (target === current || animating) return

    setDirection(target > current ? 1 : -1)
    setAnimating(true)
    setCurrent(target)
  }, [animating, current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

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

  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const shouldGoNext =
      info.offset.x <= -SWIPE_OFFSET_THRESHOLD ||
      info.velocity.x <= -SWIPE_VELOCITY_THRESHOLD
    const shouldGoPrev =
      info.offset.x >= SWIPE_OFFSET_THRESHOLD ||
      info.velocity.x >= SWIPE_VELOCITY_THRESHOLD

    if (shouldGoNext) {
      next()
      return
    }

    if (shouldGoPrev) {
      prev()
    }
  }, [next, prev])

  const slideVariants = {
    enter: (dir: 1 | -1) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 72 : -72,
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: 1 | -1) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -72 : 72,
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.985,
    }),
  }

  const slideTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] as const }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0D1117]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          drag={isTouchLayout ? 'x' : false}
          dragListener={isTouchLayout}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          onDragEnd={isTouchLayout ? handleDragEnd : undefined}
          onAnimationComplete={() => setAnimating(false)}
          className="h-full w-full"
          style={{ touchAction: isTouchLayout ? 'pan-y' : 'auto' }}
        >
          {current === 0
            ? <CoverSlide />
            : <ProjectSlide project={projects[current - 1]} slideNumber={current} />
          }
        </motion.div>
      </AnimatePresence>

      <SlideNav
        total={TOTAL}
        current={current}
        onNext={next}
        onPrev={prev}
        onGoto={goTo}
      />
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
      {isTouchLayout ? 'Arraste para os lados para navegar' : 'Use ← → ou Espaço para navegar'}
    </div>
  )
}
