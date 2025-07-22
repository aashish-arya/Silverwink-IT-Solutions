import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


import Home from './pages/Home';
import Loginpage from './pages/Loginpage.jsx';
import Dashboard from './pages/Dashboard.jsx';


const App = () => {

  return (

    <div className=' overflow-hidden'>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
