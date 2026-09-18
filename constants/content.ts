import type { WorkItem } from '~/types'

export const WORK_ITEMS: WorkItem[] = [
  { title: 'ai_llm_title', desc: 'ai_llm_desc' },
  { title: 'backend_title', desc: 'backend_desc' },
  { title: 'fullstack_title', desc: 'fullstack_desc' },
  { title: 'automation_title', desc: 'automation_desc' }
]

export const WORKFLOW_ITEMS: string[] = [
  'ai_workflow_1',
  'ai_workflow_2',
  'ai_workflow_3',
  'ai_workflow_4'
]

export const TECH_STACK: string[] = [
  'OpenAI',
  'LangChain',
  'RAG',
  'AI Agents',
  'Vector Databases',
  'Prompt Engineering',
  'LLM / AI',
  'Python',
  'PHP',
  'Laravel',
  'Symfony',
  'Vue.js',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Sass',
  'GraphQL',
  'PostgreSQL',
  'Go',
  'Bash',
  'Docker',
  'Git',
  'Linux',
  'PowerShell',
  'Nginx',
  'C',
  'C++',
  'AWS',
  'GCP',
  'Cloudflare',
  'Kubernetes',
  'Terraform',
  'GitHub Actions',
  'Windows Server',
  'Ubuntu',
  'Debian'
]

export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/mikovp',
    title: 'View my Github profile'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/mikovp/',
    title: 'View my LinkedIn profile'
  }
} as const

export const EMAIL = {
  url: 'mailto:hello@mikovp.com',
  text: 'hello@mikovp.com'
} as const
