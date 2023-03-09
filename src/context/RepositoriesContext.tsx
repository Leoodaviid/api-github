import { createContext, ReactNode, useState, useEffect, useReducer } from 'react'
import { LanguagesProps, RespositoriesProps, UserProps } from '../models/models'
import { getLangsFrom } from '../services/mainApi/langRepositories'
import { getRepos, getUser } from '../services/mainApi/user'

interface RepositoriesContextProps {
  user?: UserProps
  repositories: RespositoriesProps[]
  languages: LanguagesProps[]
  login: State
  dispatch: (action: Action) => void
  loading: boolean
  error: null | Error
}
export type State = {
  login: string | undefined
}

type Action = {
  type: FormActions
  payload: string | undefined
}

export enum FormActions {
  setLogin,
}

const initialData: State = {
  login: '',
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setLogin:
      return { ...state, login: action.payload }
    default:
      return state
  }
}

export const RepositoriesContext = createContext<RepositoriesContextProps>(
  {} as RepositoriesContextProps,
)

export const RepositoriesStorage = ({ children }: { children: ReactNode }) => {
  const [login, dispatch] = useReducer(formReducer, initialData)
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
        const userRequest = await getUser({ userLogin: login.login })
        const repositoriesRequest = await getRepos({ userLogin: login.login })
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
      value={{ user, repositories, dispatch, login, languages, loading, error }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}
