import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { RepositoriesStorage } from './context/RepositoriesContext'

export default function App() {
  return (
    <RepositoriesStorage>
      <BrowserRouter>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </Theme>
      </BrowserRouter>
    </RepositoriesStorage>
  )
}
