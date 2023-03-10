import { Err } from './styles'

interface ErrorProps {
  children?: string | any | null
}

export const Error = ({ children }: ErrorProps) => {
  if (!children) return null
  return <Err>{children}</Err>
}
