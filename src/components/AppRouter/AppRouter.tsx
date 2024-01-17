import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { About  } from '../About/About'
import { Portfolio  } from '../Portfolio/Portfolio'
import { Skills  } from '../Skills/Skills'
import Contact from '../Contact/Contact'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}