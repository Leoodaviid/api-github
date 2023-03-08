import { RespositoriesProps } from '../../models/models'
import { Container, Name, Description, Footer, Lang, Link } from './styles'

interface CardRepositoryProps {
  repository: RespositoriesProps
}
export const CardRepository = ({ repository }: CardRepositoryProps) => {
  return (
    <Container color='#f37272'>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color='#f37272'>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target={'_blank'}>
          Ver
        </Link>
      </Footer>
    </Container>
  )
}
