import { Container, Logo, Title, Form, Input, Button } from './styles'
import { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import GitHubLogo from '../../assets/icons/github-logo.svg'

const Main = () => {
  const [login, setLogin] = useState<string>()

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
