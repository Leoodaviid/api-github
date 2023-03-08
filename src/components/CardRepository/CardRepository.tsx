import { RespositoriesProps } from '../../models/models'
import { Container, Name, Description, Footer, Lang, Link } from './styles'
import { languageColors } from '../Helper/langColors'

interface CardRepositoryProps {
  repository: RespositoriesProps
}
export const CardRepository = ({ repository }: CardRepositoryProps) => {
  const color = languageColors[repository.language && repository.language.toLowerCase()]
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target={'_blank'}>
          Ver
        </Link>
      </Footer>
    </Container>
  )
}
