import { Container, Selector, Cleaner } from './styles'

export const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#FCC419' },
    { name: 'Shell', count: 2, color: '#23DB42' },
    { name: 'PHP', count: 2, color: '#4263Eb' },
    { name: 'TypeScript', count: 2, color: '#4263Eb' },
  ]

  const selectors = langs.map(({ name, count, color }) => (
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
