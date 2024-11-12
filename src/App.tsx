import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Contexts from './components/Contexts'
import Toolbar from './components/Toolbar'

// Pages
import Error from './pages/Error'
import Home from './pages/Home'
import Game from './pages/Game'
import Profile from './pages/Profile'

export default function App(): React.ReactElement {
  return (
    <Contexts>
      <Toolbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Error errorCode={404} errorMessage='page not found' description="You seem in an uncharted territory. Let's get you back on track." />} />
      </Routes>
    </Contexts>
  )
}
