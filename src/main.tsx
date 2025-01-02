import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import JoinInterview from './joinInterview'
import CreateInterview from './createInterview'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/joinInterview" element={<JoinInterview />} />
        <Route path="/createInterview" element={<CreateInterview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)