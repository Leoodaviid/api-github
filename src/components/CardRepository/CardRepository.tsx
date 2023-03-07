import { Container, Name, Description, Footer, Lang, Link } from './styles'

export const CardRepository = () => {
  return (
    <Container color='#f37272'>
      <Name>Repositorio name</Name>
      <Description>Description</Description>
      <Footer color='#f37272'>
        <Lang>lang</Lang>
        <Link href='#' target={'_blank'}>
          Ver
        </Link>
      </Footer>
    </Container>
  )
}
