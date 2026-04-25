import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Collections from './pages/Collections'
import CreateBox from './pages/CreateBox'
import Home from './pages/Home'
import Personalisation from './pages/Personalisation'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/personnalisation" element={<Personalisation />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/creer-ma-box" element={<CreateBox />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
