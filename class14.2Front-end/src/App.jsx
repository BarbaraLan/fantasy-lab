import './App.css'
import { Routes, Route } from 'react-router-dom'
import CharactersListPage from './pages/CharactersListPage'
import CreateCharacterPage from './pages/CreateCharacterPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
        <Route path='/newCharacter' element={<CreateCharacterPage />} />
      </Routes>
    </>
  )
}

export default App
