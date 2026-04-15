import {
  Terminal,
  Code2,
  UserCircle2,
  Github,
  Linkedin,
  Database,
  Layers,
} from "lucide-react";
import { GlowBlob } from "./GlowBlob";
import { candidate, dbList, techList, tools } from "../data/portfolio";

export function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-[#0D1117] text-white">
      <GlowBlob
        color="#7C3AED"
        size={500}
        top="-150px"
        left="-150px"
        opacity={0.25}
      />
      <GlowBlob
        color="#22D3EE"
        size={600}
        bottom="-200px"
        right="-100px"
        opacity={0.25}
      />
      <GlowBlob
        color="#58A6FF"
        size={300}
        top="20%"
        left="60%"
        opacity={0.15}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-5 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#7C3AED]">
              <Terminal size={12} />
              {candidate.badgeLabel}
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight">
              Thiago Arthur Lourenço Lima
            </h1>
            <p className="text-slate-300 max-w-2xl">
              Full-stack developer com foco em front-end, APIs e experiência do
              usuário. Apresentação geral do meu portfólio e experiência
              profissional.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/Thiago250801"
                title="https://github.com/Thiago250801"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#0b1220] border border-[#2d3748] hover:border-[#58A6FF] transition text-sm"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-arthur-1898a91a2/"
                title="https://www.linkedin.com/in/thiago-arthur-1898a91a2/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#0b1220] border border-[#2d3748] hover:border-[#58A6FF] transition text-sm"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#30363d] bg-[#111827]/85 p-4 sm:p-5 min-w-[260px]">
            <div className="flex items-center gap-2 text-sm text-slate-200 mb-3">
              <UserCircle2 size={18} /> Sobre
            </div>
            <p className="text-xs text-slate-300">
              <strong>Formação:</strong> Análise e Desenvolvimento de Sistemas
            </p>
            <p className="mt-1 text-xs text-slate-300">
              <strong>Inglês:</strong> B1
            </p>
            <p className="mt-1 text-xs text-slate-300">
              <strong>Atuação:</strong> Front-end / Back-end / APIs
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#30363d] bg-[#111827]/80 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#58A6FF] mb-3">
              <Code2 size={16} /> Linguagens & Frameworks
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {techList.map((tech) => (
                <div
                  key={tech.label}
                  className="rounded-xl border border-[#23303f] bg-[#0b1220] px-2 py-2 text-xs flex items-center gap-2"
                >
                  <i className={`${tech.iconClass} text-[16px]`} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#30363d] bg-[#111827]/80 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#58A6FF] mb-3">
              <Database size={16} /> Banco de Dados
            </div>
            <div className="flex flex-col gap-2 text-xs">
              {dbList.map((db) => (
                <div
                  key={db.label}
                  className="rounded-xl border border-[#23303f] bg-[#0b1220] px-2 py-2 flex items-center gap-2"
                >
                  <i className={`${db.iconClass} text-[16px]`} />
                  <span>{db.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#58A6FF] mb-3">
              <Layers size={16} /> Ferramentas & Metodologias
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {tools.map((tool) => {
                if (tool.iconType === "devicon") {
                  return (
                    <div
                      key={tool.label}
                      className="rounded-lg border border-[#23303f] bg-[#0b1220] px-2 py-1.5 flex items-center gap-1.5"
                    >
                      <i className={`${tool.iconClass} text-[14px]`} />
                      <span>{tool.label}</span>
                    </div>
                  );
                }

                const IconComponent = tool.icon!;
                return (
                  <div
                    key={tool.label}
                    className="rounded-lg border border-[#23303f] bg-[#0b1220] px-2 py-1.5 flex items-center gap-1.5"
                  >
                    <IconComponent size={14} className="flex-shrink-0" />
                    <span>{tool.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-300 text-xs">
        Use as setas ← → ou espaço para navegar pelos slides
      </div>
    </div>
  );
}
