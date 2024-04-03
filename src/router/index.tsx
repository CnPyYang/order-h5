import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
// BrowserRouter history ;HashRouter hash

import App from '@/App'
import About from '@/views/about'
import Home from '@/views/home'

const baseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default baseRouter