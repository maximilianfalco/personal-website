import './App.css'
import { ReactLenis } from 'lenis/react'
import Hero from './sections/Hero.tsx';

function App() {
  return (
    <ReactLenis root>
      <div className='overflow-auto'>
        <Hero />
      </div>
    </ReactLenis>
  )
}

export default App
