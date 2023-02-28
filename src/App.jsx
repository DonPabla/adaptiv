import './App.css'
import router from './app/index.jsx'
import {RouterProvider, Routes, Route, Link} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'
import Authorization from './components/auth/Authorization'
import Password_recovery from './components/auth/Password-recovery'
import Registration from './components/auth/Registration'
import Search from './components/header/Search'
import Catalogue from './components/header/Catalogue'
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Catalogue/> */}
      {/* <Search/> */}
      <RouterProvider
        router={router}
        
      />
      
      <Footer />
    </div>
  )
}

export default App