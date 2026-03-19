import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideNavProps {
  total: number
  current: number
  onPrev: () => void
  onNext: () => void
  onGoto: (i: number) => void
}

export function SlideNav({ total, current, onPrev, onNext, onGoto }: SlideNavProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-9 h-9 rounded-full border border-[#30363d] bg-[#161b22]/80 flex items-center justify-center
                   text-[#8b949e] hover:text-white hover:border-[#8b949e] disabled:opacity-30
                   transition-all backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoto(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-[#58A6FF]' : 'w-2 h-2 bg-[#30363d] hover:bg-[#8b949e]'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-9 h-9 rounded-full border border-[#30363d] bg-[#161b22]/80 flex items-center justify-center
                   text-[#8b949e] hover:text-white hover:border-[#8b949e] disabled:opacity-30
                   transition-all backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}