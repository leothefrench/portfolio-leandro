import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { About  } from '../About/About'
import { Portfolio  } from '../Portfolio/Portfolio'
import { Clients  } from '../Clients/Clients'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/clients' element={<Clients />} />
    </Routes>
  )
}