import { RespositoriesProps } from '../../models/models'
import { CardRepository } from '../CardRepository/CardRepository'
import { Container } from './styles'

interface RepositoryProps {
  repositories: RespositoriesProps[]
}
export const Repository = ({ repositories }: RepositoryProps) => {
  const repos = repositories.map((repository) => (
    <CardRepository key={repository.id} repository={repository} />
  ))

  return <Container>{repos}</Container>
}
