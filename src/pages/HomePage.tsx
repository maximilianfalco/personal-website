import { ReactLenis } from 'lenis/react'
import Hero from '../sections/Hero'
import CurrentlyWorkingOn from '../sections/CurrentlyWorkingOn'
import PastProjects from '../sections/PastProjects'

const HomePage = () => {
  return (
    <ReactLenis root>
      <div className=''>
        <Hero />
        <div className='px-12 md:px-16 lg:px-20 box-border mb-14 gap-10 flex flex-col'>
          <CurrentlyWorkingOn />
          <PastProjects />
        </div>
      </div>
    </ReactLenis>
  )
}

export default HomePage