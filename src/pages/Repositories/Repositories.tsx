import { Filter } from '../../components/Filter/Filter'
import { Profile } from '../../components/Profile/Profile'
import { Repository } from '../../components/Repository/Repository'
import { Container, Sidebar, Main } from './styles'

const Repositories = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repository />
      </Main>
    </Container>
  )
}

export default Repositories
