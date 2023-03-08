import { RespositoriesProps } from '../../models/models'
import { CardRepository } from '../CardRepository/CardRepository'
import { Container } from './styles'

interface RepositoryProps {
  repositories: RespositoriesProps[]
  currentLanguage?: string
}
export const Repository = ({ repositories, currentLanguage }: RepositoryProps) => {
  const repos = repositories
    .filter(
      (repository) => currentLanguage === undefined || repository.language === currentLanguage,
    )
    .map((repository) => <CardRepository key={repository.id} repository={repository} />)

  return <Container>{repos}</Container>
}
