import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/welcome/:name" element={<Welcome />} />
    </Routes>
  )
}