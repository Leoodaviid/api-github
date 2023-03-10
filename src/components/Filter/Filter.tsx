import { LanguagesProps } from '../../models/models'
import { Container, Selector } from './styles'

interface FilterLanguageProps {
  languages: LanguagesProps[]
  currentLanguage?: string
  onClick: (name?: string) => void
}
export const Filter = ({ languages, currentLanguage, onClick }: FilterLanguageProps) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLocaleLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : undefined}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return <Container>{selectors}</Container>
}
