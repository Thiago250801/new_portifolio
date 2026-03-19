# Portfolio de Projetos (Slide Deck)

Aplicacao em React + TypeScript para apresentar projetos em formato de slides, com navegacao por teclado e painel visual para midias.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run build
npm run preview
```

## Estrutura principal

- `src/App.tsx`: controle de navegacao entre slides e animacao de transicao
- `src/data/portfolio.ts`: dados do candidato e lista de projetos
- `src/components/CoverSlide.tsx`: slide de abertura
- `src/components/ProjectSlide.tsx`: slide de projeto
- `src/components/MediaPanel.tsx`: renderizacao de imagem/video/url
- `src/components/SlideNav.tsx`: navegacao (setas + dots)
- `public/media/`: assets de video/imagem dos projetos

## Personalizacao

1. Edite `src/data/portfolio.ts` para atualizar:
- Dados do candidato (`candidate`)
- Lista de projetos (`projects`)
- Links de deploy/repositorio e tecnologias

2. Adicione/atualize midias em `public/media/` e referencie no campo `media` de cada projeto.

3. Ajuste layout/estilo nos componentes em `src/components/`.

## Navegacao

- `Seta direita`, `Seta para baixo` ou `Espaco`: proximo slide
- `Seta esquerda` ou `Seta para cima`: slide anterior
