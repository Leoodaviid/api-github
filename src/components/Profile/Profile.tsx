import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

interface UserProps {
  user: {
    login: string
    name: string
    avatar_url: string
    followers: number
    following: number
    company?: string | undefined
    blog: string
    location: string
  }
}

export const Profile = ({ user }: UserProps) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;1{user.followers}&nbsp;
          <i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  )
}
