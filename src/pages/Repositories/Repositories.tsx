import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Filter } from '../../components/Filter/Filter'
import { Profile } from '../../components/Profile/Profile'
import { Repository } from '../../components/Repository/Repository'
import { Loading, Container, Sidebar, Main } from './styles'
import { LanguagesProps, RespositoriesProps, UserProps } from '../../models/models'
import { getLangsFrom } from '../../services/mainApi/langRepositories'
import { getRepos, getUser } from '../../services/mainApi/user'

const Repositories = () => {
  const { login } = useParams()
  console.log(login)
  const [user, setUser] = useState<UserProps>()
  const [repositories, setRepositories] = useState<RespositoriesProps[]>([])
  const [languages, setLanguages] = useState<LanguagesProps[]>([])
  const [currentLanguage, setCurrentLanguage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      try {
        const userRequest = await getUser({ userLogin: login })
        const repositoriesRequest = await getRepos({ userLogin: login })
        const request = [userRequest, repositoriesRequest]
        const [{ data: userResponse }, { data: repositoriesResponse }] = await Promise.all(request)
        setUser(userResponse)
        setRepositories(repositoriesResponse)
        setLanguages(getLangsFrom(repositoriesResponse))
        setLoading(false)
      } catch (err) {
        //..
      } finally {
        //..
      }
    })()
  }, [])

  const onFilterClick = (language?: string) => {
    if (language === currentLanguage) {
      setCurrentLanguage(undefined)
    } else {
      setCurrentLanguage(language)
    }
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
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
