import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import Repositories from './pages/Repositories/Repositories'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:user/repositories' element={<Repositories />}></Route>
    </Routes>
  )
}
