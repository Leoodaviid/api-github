import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { UserProps } from '../../models/models'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

interface ProfileProps {
  user?: UserProps
}
export const Profile = ({ user }: ProfileProps) => {
  return (
    <Container>
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
