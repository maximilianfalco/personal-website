import './App.css'
import { ReactLenis } from 'lenis/react'
import Hero from './sections/Hero.tsx';
import CurrentlyWorkingOn from './sections/CurrentlyWorkingOn.tsx';
import PastProjects from './sections/PastProjects.tsx';

function App() {
  return (
    <ReactLenis root>
      <div className='overflow-auto'>
        <Hero />
        <div className='px-20 box-border mb-24 gap-10 flex flex-col'>
          {/* <CurrentlyWorkingOn /> */}
          {/* <PastProjects /> */}
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
