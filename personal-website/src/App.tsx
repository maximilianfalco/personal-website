import './App.css'
import ProfilePicture from './assets/cropped.jpg'
import LinkedInLogo from './assets/linkedIn.png'
import Resume from './assets/Maximilian_Falco_Widjaya.pdf'

import {
  PaperClipIcon
} from '@heroicons/react/24/outline';

function App() {
  return (
    <div className='lg:h-screen lg:w-screen lg:mt-0 mt-40 p-5 flex justify-center items-center box-border'>
      <div className='flex gap-5 items-center flex-wrap justify-center lg:flex-nowrap lg:justify-start'>
        <div className="w-40 h-40 lg:w-48 lg:h-48">
          <img
            src={ProfilePicture}
            alt="Maximilian Falco Widjaya"
            className="w-full h-full rounded-full"
            title='Maximilian Falco Widjaya'
          />
        </div>
        <div className='flex flex-wrap justify-center h-fit w-full lg:w-fit lg:block'>
          <p className='text-5xl font-bold text-center lg:text-left'>
            Maximilian Falco Widjaya
          </p>
          <p className='text-xl opacity-80 mt-2 lg:mt-0 lg:text-left'>
            Fullstack Developer
          </p>
          <p className='text-l mt-5 text-center lg:text-left'>
            This site is still in progress. In the meantime, here are my details! Feel free to reach out!
          </p>
          <div className='flex mt-2 gap-3'>
            <a href={Resume} target='_blank' className='hover:scale-105'>
              <div className='w-fit h-10 bg-slate-100 hover:bg-slate-500 rounded-lg shadow-lg opacity-70 text-slate-800 hover:text-slate-200 py-1 px-2 flex items-center'>
                <PaperClipIcon className='h-5 w-5 mr-1' />
                My Resume!
              </div>
            </a>
            <a href='https://www.linkedin.com/in/maximilian-falco-widjaya/' target='_blank' className="w-10 h-10 cursor-pointer hover:scale-105">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                className="w-full h-full rounded-lg"
                title='LinkedIn'
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
