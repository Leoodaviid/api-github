import { Container, Selector, Cleaner } from './styles'

interface FilterLanguageProps {
  languages: { name: string; count: number; color?: string }[]
}
export const Filter = ({ languages }: FilterLanguageProps) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector key={name.toLocaleLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  )
}
