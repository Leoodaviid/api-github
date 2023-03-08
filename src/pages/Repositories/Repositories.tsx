import { Filter } from '../../components/Filter/Filter'
import { Profile } from '../../components/Profile/Profile'
import { Repository } from '../../components/Repository/Repository'
import { Container, Sidebar, Main } from './styles'
import { RespositoriesProps } from '../../models/models'
import { getLangsFrom } from '../../services/langRepositories'

const Repositories = () => {
  const user = {
    login: 'Leoodaviid',
    name: 'Leonardo David',
    avatar_url: 'https://avatars.githubusercontent.com/u/104696611?v=4',
    followers: 8,
    following: 13,
    company: '',
    blog: 'portfolio-david-pi.vercel.app',
    location: 'Fortaleza - CE',
  }

  const repositories: RespositoriesProps[] = [
    {
      name: 'repo 1',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'PHP',
    },
    {
      name: 'repo 2',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'JavaScript',
    },
    {
      name: 'repo 3',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'PHP',
    },
    {
      name: 'repo 4',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'Ruby',
    },
    {
      name: 'repo 5',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'TypeScript',
    },
    {
      name: 'repo 6',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'TypeScript',
    },
    {
      name: 'repo 7',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'shell',
    },
    {
      name: 'repo 8',
      desciption: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'css',
    },
  ]

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repository />
      </Main>
    </Container>
  )
}

export default Repositories
