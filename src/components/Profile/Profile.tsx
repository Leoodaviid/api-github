import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

export const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/104696611?v=4' />
        <Login>Leoodaviid</Login>
        <Name>Leonardo David</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          Minha companhia
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Fortaleza - CE
        </Data>
        <Data>
          <MdLink size={20} />
          <a href=''>Meu portfolio</a>
        </Data>
      </Inner>
    </Container>
  )
}
