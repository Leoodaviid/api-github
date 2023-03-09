import { useState } from 'react'
import { Filter } from '../../components/Filter/Filter'
import { Profile } from '../../components/Profile/Profile'
import { Repository } from '../../components/Repository/Repository'
import { useRepo } from '../../hooks/useRepo'
import { Loading, Container, Sidebar, Main } from './styles'

const Repositories = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>()
  const { user, repositories, languages, loading } = useRepo()

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
