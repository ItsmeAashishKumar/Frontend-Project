
import './App.css'
import CryptoDictionary from './Components/CryptoDictionary'
import EndPage from './Components/EndPage'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import TopCrypto from './Components/TopCrypto'
import Card  from './Components/Card'
function App() {


  return (
    <div className='App'>
      <Navbar />
      <Home/>
      <Card/>
      <TopCrypto/>
      <CryptoDictionary/>
      <EndPage/>
    </div>
  )
}

export default App
