import { Container, Logo, Title, Form, Button } from './styles'
import { FormEvent } from 'react'
import { MdSearch } from 'react-icons/md'
import { FormActions } from '../../context/RepositoriesContext'
import { Input } from '../../components/Form/Input'
import { useNavigate } from 'react-router-dom'
import { useRepo } from '../../hooks/useRepo'
import GitHubLogo from '../../assets/icons/github-logo.svg'
import useForm from '../../hooks/useForm'

const Main = () => {
  const { dispatch } = useRepo()
  const navigate = useNavigate()
  const user = useForm('login')

  const handleNext = (event: FormEvent) => {
    event.preventDefault()
    if (user.validate()) {
      dispatch({
        type: FormActions.setLogin,
        payload: user.value,
      })
      navigate(`/${user.value}/repositories`)
    }
  }

  return (
    <Container>
      <Logo src={GitHubLogo} alt='Logo Api GitHub' />
      <Title>Api GitHub</Title>
      <Form onSubmit={handleNext}>
        <Input placeholder='Usuário' type='text' label='Usuário' name='login' {...user} />
        <Button>
          <MdSearch />
        </Button>
      </Form>
    </Container>
  )
}

export default Main
