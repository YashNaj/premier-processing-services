import React from 'react';
import {
  Navbar
} from './components'
import {
  Welcome
}from './containers'
import './App.css'
import Cards from './containers/cards/Cards';
import Footer from './containers/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Welcome />
      <Cards />
      <Footer/>
    </div>
  )
}

export default App;