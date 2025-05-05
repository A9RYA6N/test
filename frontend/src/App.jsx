import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/Homepage'
import Signin from './components/Signin'
import Updaterecipe from './components/Updaterecipe'
import Signup from './components/Signup'
import Singlerecipe from './components/Singlerecipe'
import Createrecipe from './components/Createrecipe'
import {BrowserRouter, Routes, Route} from 'react-router'
import { RecipeProvider } from './RecipeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/create-recipe' element={<Createrecipe/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/recipe/update/:id' element={<Updaterecipe/>}></Route>
            <Route path='/recipe/:id' element={<Singlerecipe/>}></Route>
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
    
  )
}

export default App
