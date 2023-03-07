import { Container, Logo, Title } from './styles'
import GitHubLogo from '../../assets/icons/github-logo.svg'

const Main = () => {
  return (
    <Container>
      <Logo src={GitHubLogo} alt='Logo Api GitHub' />
      <Title>Api GitHub</Title>
    </Container>
  )
}

export default Main
