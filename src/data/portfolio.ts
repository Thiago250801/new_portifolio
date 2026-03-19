// ============================================================
//  📝 EDITE ESTE ARQUIVO para personalizar sua apresentação
// ============================================================

import { Code2, Database, GitBranch, Monitor, NetworkIcon, Shell, SquareTerminal, Terminal, Users2, type LucideIcon } from "lucide-react";

export interface TechBadge {
    label: string
    color?: string  // cor hex do texto
    devicon?: string
}

export type ProjectMedia =
    | { type: 'image'; src: string }
    | { type: 'video'; src: string }
    | { type: 'url'; href: string }
    | { type: 'placeholder' }
    | { type: 'mobile-video', src: string }

export interface Project {
    id: number
    tag: string
    title: string
    description: string
    tech: TechBadge[]
    deployUrl?: string
    repoUrl?: string
    media: ProjectMedia
    floatingIcon: LucideIcon,
    floatingIconColor: string,
}

// ─────────────────────────────────────────
//  🙋 DADOS DO CANDIDATO
// ─────────────────────────────────────────
export const candidate = {
    name: 'Thiago Arthur Lourenço Lima',
    role: 'Desenvolvedor Front-End | Full Stack',
    badgeLabel: 'Apresentação do Portfólio',
}

// ─────────────────────────────────────────
//  📦 PROJETOS
// ─────────────────────────────────────────

export const techList = [
  { label: "SQL", iconClass: "devicon-mysql-plain-wordmark" },
  { label: "Python (Django)", iconClass: "devicon-python-plain" },
  { label: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { label: "PHP", iconClass: "devicon-php-plain" },
  { label: "TypeScript", iconClass: "devicon-typescript-plain colored" },
  { label: "Angular", iconClass: "devicon-angularjs-plain colored" },
  { label: "React", iconClass: "devicon-react-original colored" },
  { label: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
  { label: "HTML", iconClass: "devicon-html5-plain colored" },
  { label: "SCSS", iconClass: "devicon-sass-original colored" },
  { label: "React Native", iconClass: "devicon-react-original colored" },
  { label: "Jetpack Compose", iconClass: "devicon-jetpackcompose-plain colored" },
  { label: "Yii2", iconClass: "devicon-yii-plain colored" },
  { label: "NodeJS", iconClass: "devicon-nodejs-plain-wordmark colored" },
  { label: "ExpressJs", iconClass: "devicon-express-original colored" },
  { label: "WordPress", iconClass: "devicon-wordpress-plain colored" },
];

export const dbList = [
  { label: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { label: "MySQL", iconClass: "devicon-mysql-plain-wordmark" },
  { label: "Firebase", iconClass: "devicon-firebase-plain colored" },
];

export const tools = [
  { label: "Git / GitHub", iconClass: "devicon-git-plain colored", iconType: 'devicon' },
  { label: "Linux", iconClass: "devicon-linux-plain colored", iconType: 'devicon' },
  { label: "Scrum", icon: Users2 , iconType: 'lucide' },
  { label: "REST APIs", icon: NetworkIcon, iconType: 'lucide' },
  { label: "Zustand", iconClass: "devicon-zustand-plain colored", iconType: 'devicon' },
  { label: "Angular Material", iconClass: "devicon-angularmaterial-plain colored", iconType: 'devicon' },
  { label: "Bootstrap", iconClass: "devicon-bootstrap-plain colored", iconType: 'devicon' },
  { label: "TailwindCSS", iconClass: "devicon-tailwindcss-plain colored", iconType: 'devicon' },
];
export const projects: Project[] = [
    {
        id: 1,
        tag: 'Web Application',
        title: 'CineFinder',
        description:
            'Aplicação web para descoberta de filmes e séries usando a API do TMDB.',
        tech: [
            { label: 'React 19', color: '#58A6FF', devicon: 'devicon-react-original colored text-3xl' },
            { label: 'Vite', color: '#9333b1ff', devicon: 'devicon-vite-plain colored text-3xl' },
            { label: 'TypeScript', color: '#3178c6', devicon: 'devicon-typescript-plain colored text-3xl' },
            { label: 'Insomnia', color: '#4000BF', devicon: 'devicon-insomnia-plain colored text-3xl' },
            { label: 'FramerMotion', color: '#0055FF', devicon: 'devicon-framermotion-original colored text-3xl' }
        ],
        deployUrl: 'https://cine-finder-on2c.vercel.app',
        repoUrl: 'https://github.com/Thiago250801/cine-finder',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'image', src: '/media/cinefinder.png' },
        floatingIcon: Code2,
        floatingIconColor: '#7C3AED',
    },
    {
        id: 2,
        tag: 'Mobile App',
        title: 'HeManaus',
        description:
            'Aplicativo Android para apoiar o fluxo de doacao de sangue do Hemoam/AM em Manaus, com autenticacao, agendamento e acompanhamento pos-doacao.',
        tech: [
            { label: 'Kotlin', color: '#7F52FF', devicon: 'devicon-kotlin-plain colored text-3xl' },
            { label: 'Jetpack Compose', color: '#4285F4', devicon: 'devicon-jetpackcompose-plain colored text-3xl' },
            { label: 'Android Studio', color: '#3DDC84', devicon: 'devicon-androidstudio-plain colored text-3xl' },
            { label: 'Firebase', color: '#FFCA28', devicon: 'devicon-firebase-plain colored text-3xl' },

        ],
        repoUrl: 'https://github.com/Thiago250801/HeManaus',
        media: { type: 'mobile-video', src: '/media/HeManaus.mp4' },
        floatingIcon: Database,
        floatingIconColor: '#22D3EE'
    },
    {
        id: 3,
        tag: 'Web Application',
        title: 'MessageHub',
        description:
            'Projeto simples desenvolvido para demonstrar conceitos básicos de backend utilizando PHP e MySQL. A aplicação permite que usuários enviem mensagens através de um formulário de contato, salvando os dados no banco de dados, listando-os em uma tabela, visualizando detalhes, e permitindo a edição e exclusão dos registros, além de possuir uma arquitetura moderna baseada em MVC.',
        tech: [
            { label: 'PHP', color: '#777BB4', devicon: 'devicon-php-plain colored text-3xl' },
            { label: 'MySQL', color: '#4479A1', devicon: 'devicon-mysql-plain colored text-3xl' },
            { label: 'PDO', color: '#3178c6' },
            { label: 'Bootstrap', color: '#4000BF', devicon: 'devicon-bootstrap-plain colored text-3xl' },
            { label: 'Composer', color: '#fff', devicon: 'devicon-composer-line colore text-3xl' }
        ],
        repoUrl: 'https://github.com/Thiago250801/projeto-teste',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'video', src: '/media/php_messageHub.mp4' },
        floatingIcon: Shell,
        floatingIconColor: '#FF0000',
    },
    {
        id: 4,
        tag: 'Web Application',
        title: 'Yii2 Crud',
        description:
            'Aplicação web em Yii2 (Basic Template) para gerenciamento de produtos, com CRUD completo, listagem em grid e upload de imagem por item.',
        tech: [
            { label: 'PHP', color: '#777BB4', devicon: 'devicon-php-plain colored text-3xl' },
            { label: 'MySQL', color: '#4479A1', devicon: 'devicon-mysql-plain colored text-3xl' },
            { label: 'Yii2', color: '#40B3D8', devicon: 'devicon-yii-plain colored text-3xl' },
            { label: 'Bootstrap', color: '#4000BF', devicon: 'devicon-bootstrap-plain colored text-3xl' },
            { label: 'Composer', color: '#fff', devicon: 'devicon-composer-line colore text-3xl' }
        ],
        repoUrl: 'https://github.com/Thiago250801/yii-crud',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'video', src: '/media/yii2_crud.mp4' },
        floatingIcon: GitBranch,
        floatingIconColor: '#FF4500',
    },
    {
        id: 5,
        tag: 'Web Application',
        title: 'Portifolio WordPress',
        description:
            'Tema baseado no Twenty Twenty-Four com customizações para portfólio e página de contato.',
        tech: [
            { label: 'WordPress', color: '#777BB4', devicon: 'devicon-wordpress-plain colored text-3xl' },
            { label: 'PHP', color: '#777BB4', devicon: 'devicon-php-plain colored text-3xl' },
            { label: 'MySQL', color: '#4479A1', devicon: 'devicon-mysql-plain colored text-3xl' },
        ],
        repoUrl: 'https://github.com/Thiago250801/twentytwentyfour',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'video', src: '/media/wordpress.mp4' },
        floatingIcon: Terminal,
        floatingIconColor: '#00FF00',
    },
    {
        id: 6,
        tag: 'Web Application',
        title: 'Dev Assistant Ai (Frontend)',
        description:
            'Interface web para um assistente de desenvolvimento com foco em suporte de codigo via chat em tempo real.',
        tech: [
            { label: 'React 19', color: '#58A6FF', devicon: 'devicon-react-original colored text-3xl' },
            { label: 'Vite', color: '#9333b1ff', devicon: 'devicon-vite-plain colored text-3xl' },
            { label: 'TypeScript', color: '#3178c6', devicon: 'devicon-typescript-plain colored text-3xl' },
            { label: 'TailwindCSS', color: '#4479A1', devicon: 'devicon-tailwindcss-plain colored text-3xl' },
            { label: 'FramerMotion', color: '#0055FF', devicon: 'devicon-framermotion-original colored text-3xl' },
            { label: 'Zustand', color: '#c46206ff', devicon: 'devicon-zustand-plain colored text-3xl' },
        ],
        repoUrl: 'https://github.com/Thiago250801/dev-assistant-frontend',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'video', src: '/media/dev_assistant.mp4' },
        floatingIcon: Monitor,
        floatingIconColor: '#58A6FF',
    },
    {
        id: 7,
        tag: 'Web Application',
        title: 'Dev Assistant Ai (Backend)',
        description:
            'API backend em Node.js/Express para assistente de desenvolvimento com suporte a respostas tradicionais e streaming via SSE, usando Ollama com o modelo deepseek-coder.',
        tech: [
            { label: 'NodeJS', color: '#5FA04E', devicon: 'devicon-nodejs-plain-wordmark colored text-3xl' },
            { label: 'ExpressJs', color: '#000000', devicon: 'devicon-express-original colored text-3xl' },
            { label: 'Ollama', color:'#FFFF'},
            { label: 'Axios', color: '#5A29E4', devicon: 'devicon-axios-plain colored text-3xl' },
        ],
        repoUrl: 'https://github.com/Thiago250801/dev-assistant-backend',
        // OPÇÕES:
        // { type: 'placeholder' }
        // { type: 'image', src: '/screenshot.png' }
        // { type: 'video', src: '/demo.mp4' }
        // { type: 'url',   href: 'https://...' }
        media: { type: 'video', src: '/media/dev_assistant.mp4' },
        floatingIcon: SquareTerminal,
        floatingIconColor: '#5FA04E',
    },  
]