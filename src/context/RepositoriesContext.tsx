import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { LanguagesProps, RespositoriesProps, UserProps } from '../models/models'
import { getLangsFrom } from '../services/mainApi/langRepositories'
import { getRepos, getUser } from '../services/mainApi/user'

interface RepositoriesContextProps {
  user?: UserProps
  repositories: RespositoriesProps[]
  languages: LanguagesProps[]
  setLogin: Dispatch<SetStateAction<string>>
  login: string
  loading: boolean
  error: null | Error
}

export const RepositoriesContext = createContext<RepositoriesContextProps>(
  {} as RepositoriesContextProps,
)

export const RepositoriesStorage = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState<string>('')
  const [user, setUser] = useState<UserProps>()
  const [repositories, setRepositories] = useState<RespositoriesProps[]>([])
  const [languages, setLanguages] = useState<LanguagesProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setError(null)
        setLoading(true)
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
        setLoading(false)
      }
    })()
  }, [login])

  return (
    <RepositoriesContext.Provider
      value={{ user, repositories, languages, setLogin, login, loading, error }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}
