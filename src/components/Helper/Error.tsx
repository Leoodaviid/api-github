interface ErrorProps {
  children?: string | null
}

export const Error = ({ children }: ErrorProps) => {
  if (!children) return null
  return (
    <p style={{ color: '#f31', position: 'absolute', left: '40%', margin: '1rem 0' }}>{children}</p>
  )
}
