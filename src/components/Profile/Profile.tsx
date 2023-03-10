import { MdGroup, MdLocationCity, MdWork, MdLink, MdArrowBack } from 'react-icons/md'
import { useRepo } from '../../hooks/useRepo'
import { FormActions } from '../../context/RepositoriesContext'
import { UserProps } from '../../models/models'
import { Container, Header, Back, Avatar, Login, Name, Inner, Data } from './styles'
import { useNavigate } from 'react-router-dom'

interface ProfileProps {
  user?: UserProps
}

export const Profile = ({ user }: ProfileProps) => {
  const { dispatch, login } = useRepo()
  const navigate = useNavigate()

  const handleBack = () => {
    if (login.login) {
      navigate('/')
      dispatch({
        type: FormActions.setLogin,
        payload: undefined,
      })
    }
  }

  return (
    <Container>
      <Back onClick={handleBack}>
        <MdArrowBack />
        Voltar
      </Back>
      <Header>
        <Avatar src={user?.avatar_url} />
        <Login>{user?.login}</Login>
        <Name>{user?.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user?.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;1{user?.followers}&nbsp;
          <i>seguindo</i>
        </Data>
        {user?.company && (
          <Data>
            <MdWork size={20} />
            {user?.company}
          </Data>
        )}
        {user?.location && (
          <Data>
            <MdLocationCity size={20} />
            {user?.location}
          </Data>
        )}
        {user?.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\\${user?.blog}`}>{user?.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  )
}
