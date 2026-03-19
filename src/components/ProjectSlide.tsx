import { ExternalLink, Github, Lock, Layers, Smartphone, Globe, Box } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GlowBlob } from './GlowBlob'
import { MediaPanel } from './MediaPanel'

function TagIcon({ tag }: { tag: string }) {
  const t = tag.toLowerCase()
  if (t.includes('mobile')) return <Smartphone size={12} />
  if (t.includes('api') || t.includes('back')) return <Box size={12} />
  if (t.includes('web') || t.includes('app')) return <Globe size={12} />
  return <Layers size={12} />
}

interface ProjectSlideProps {
  project: Project
  slideNumber: number
}

export function ProjectSlide({ project, slideNumber }: ProjectSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-[#0D1117]">
      <GlowBlob color="#7C3AED" size={600} top="-200px" right="-200px" opacity={0.15} />
      <GlowBlob color="#22D3EE" size={500} bottom="-150px" left="-150px" opacity={0.15} />

      {/* Slide number watermark — só desktop */}
      <span className="hidden md:block absolute top-8 right-8 font-heading font-bold text-9xl text-[#30363d] opacity-20 select-none z-0" aria-hidden>
        {String(slideNumber).padStart(2, '0')}
      </span>

      {/* ── LEFT / TOP ── */}
      <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center md:h-full px-6 sm:px-10 md:px-14 pt-8 md:pt-0 pb-4 md:pb-0 gap-4 md:gap-6">
        {/* Tag */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#22D3EE] text-[#22D3EE] bg-[#22D3EE]/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <TagIcon tag={project.tag} />
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white drop-shadow-md">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-[#58A6FF] pl-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 md:mb-3">
            Tecnologias Utilizadas
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-[#161b22] border border-[#30363d] text-xs md:text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-default"
                style={{ color: t.color }}
              >
                {t.devicon && <i className={`${t.devicon} text-sm md:text-base`} style={{ color: t.color }} />}
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-bold text-sm transition-all shadow-lg no-underline"
            >
              <ExternalLink size={14} />
              Ver Deploy
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#8b949e] text-white font-medium text-sm transition-all no-underline"
            >
              <Github size={16} />
              Repositório
            </a>
          )}
          {!project.deployUrl && !project.repoUrl && (
            <span className="text-gray-600 text-sm italic font-mono">// links em breve</span>
          )}
        </div>
      </div>

      {/* ── RIGHT / BOTTOM ── */}
      <div className="relative z-10 w-full md:w-[55%] flex items-center justify-center px-6 sm:px-10 md:pr-12 pb-16 md:pb-0 md:h-full">
        <div className="absolute inset-4 bg-[#58A6FF] opacity-5 rotate-6 scale-90 rounded-3xl blur-2xl" />

        {/* Browser mockup */}
        <div className="relative w-full h-52 sm:h-72 md:h-[400px] rounded-xl overflow-hidden border border-[#30363d] bg-[#010409] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(88,166,255,0.25)] transition-all duration-500">
          {/* Browser chrome — só desktop */}
          <div className="hidden md:flex h-9 bg-[#161b22] border-b border-[#30363d] items-center px-4 gap-2 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <div className="ml-3 h-6 bg-[#0d1117] rounded flex-1 flex items-center px-3 gap-2">
              <Lock size={10} className="text-[#238636]" />
              <span className="text-gray-500 text-xs font-mono">
                {project.deployUrl ?? 'https://project-demo.app'}
              </span>
            </div>
          </div>
          <MediaPanel key={project.id} media={project.media} />
        </div>

        {/* Floating icon — só desktop */}
        <div className="hidden md:flex absolute bottom-2 right-2 w-20 h-20 bg-[#161b22] rounded-2xl border border-[#30363d] items-center justify-center shadow-2xl z-20 animate-float">
          <project.floatingIcon size={32} color={project.floatingIconColor} />
        </div>
      </div>
    </div>
  )
}