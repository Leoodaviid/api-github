import { Container, Logo, Title, Form, Input, Button } from './styles'
import { MdSearch } from 'react-icons/md'
import GitHubLogo from '../../assets/icons/github-logo.svg'
import { useRepo } from '../../hooks/useRepo'

const Main = () => {
  const { setLogin, login } = useRepo()
  return (
    <Container>
      <Logo src={GitHubLogo} alt='Logo Api GitHub' />
      <Title>Api GitHub</Title>
      <Form>
        <Input
          placeholder='Usuário'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )
}

export default Main
