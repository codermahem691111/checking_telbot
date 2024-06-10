import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './Store'
import Login from './Login'
import Counter from './Counter'
function App() {
  

  return (
    <>


  <Provider store={Store}>
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/counter" element={<Counter />} />
    
        



       </Routes>
     
     
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
