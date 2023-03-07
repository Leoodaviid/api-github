import { Profile } from '../../components/Profile/Profile'
import { Container, Sidebar, Main } from './styles'

const Repositories = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>Main</Main>
    </Container>
  )
}

export default Repositories
