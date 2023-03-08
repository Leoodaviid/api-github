// Login User
export interface LoginUserProps {
  user: string
}

// User Props
export interface UserProps {
  login: string
  name: string
  avatar_url: string
  followers: number
  following: number
  company?: string | undefined
  blog: string
  location: string
}

// Colors
export interface LangColorsProps {
  javascript: string
  typescript: string
  python: string
  html: string
  css: string
  scss: string
  less: string
  vue: string
  black: string
  php: string
  go: string
  ruby: string
  c: string
  'c#': string
  'c++': string
}

// Repositories
export interface RespositoriesProps {
  id: number
  name: string
  description: string
  html_url: string
  language: string
}
