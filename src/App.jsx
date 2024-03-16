import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
    

      <Header></Header>


      
      <Recipes></Recipes>
      <ToastContainer></ToastContainer>
      
  
    </>
  )
}

export default App
