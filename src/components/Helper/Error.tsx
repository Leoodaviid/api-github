import { Err } from './styles'

interface ErrorProps {
  children?: string | null
}

export const Error = ({ children }: ErrorProps) => {
  if (!children) return null
  return <Err>{children}</Err>
}
