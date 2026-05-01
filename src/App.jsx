import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import BoxCadeauPersonnaliseePage from './pages/BoxCadeauPersonnaliseePage'
import Collections from './pages/Collections'
import CreateBox from './pages/CreateBox'
import Home from './pages/Home'
import Personalisation from './pages/Personalisation'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-cadeau-personnalisee" element={<BoxCadeauPersonnaliseePage />} />
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
