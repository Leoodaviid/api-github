import { useState } from 'react'
import { Filter } from '../../components/Filter/Filter'
import { Profile } from '../../components/Profile/Profile'
import { Repository } from '../../components/Repository/Repository'
import { Container, Sidebar, Main } from './styles'
import { RespositoriesProps } from '../../models/models'
import { getLangsFrom } from '../../services/langRepositories'

const Repositories = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>()

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
      id: 1,
      name: 'repo 1',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'PHP',
    },
    {
      id: 2,
      name: 'repo 2',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'JavaScript',
    },
    {
      id: 3,
      name: 'repo 3',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'PHP',
    },
    {
      id: 4,
      name: 'repo 4',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'Ruby',
    },
    {
      id: 5,
      name: 'repo 5',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'TypeScript',
    },
    {
      id: 6,
      name: 'repo 6',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'TypeScript',
    },
    {
      id: 7,
      name: 'repo 7',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'shell',
    },
    {
      id: 8,
      name: 'repo 8',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'css',
    },
    {
      id: 9,
      name: 'repo 9',
      description: 'descrição',
      html_url: 'https://github.com/Leoodaviid/animate.css',
      language: 'JavaScript',
    },
  ]

  const languages = getLangsFrom(repositories)

  const onFilterClick = (language?: string) => {
    if (language === currentLanguage) {
      setCurrentLanguage(undefined)
    } else {
      setCurrentLanguage(language)
    }
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repository repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  )
}

export default Repositories
