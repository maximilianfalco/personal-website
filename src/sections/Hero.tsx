import LinkedInLogo from '../assets/linkedIn.png'
import Resume from '../assets/Maximilian_Falco_Widjaya.pdf'
import DarkLightToggle from '../components/DarkLightToggle';
import ProfilePicture from '../components/ProfilePicture';

import {
  PaperClipIcon
} from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <main className='lg:min-h-[700px] xl:min-h-screen xl:min-w-screen mt-14 lg:mt-0 p-5 flex justify-center items-center box-border'>
      <DarkLightToggle />
      <body className='flex gap-5 items-center flex-wrap justify-center xl:flex-nowrap xl:justify-start max-w-[80%]'>
        
        <section className="w-40 h-40 lg:w-64 lg:h-64 xl:w-80 xl:h-80 overflow-hidden flex">
          <ProfilePicture />
        </section>

        <section className='flex flex-wrap justify-center h-fit w-full xl:w-fit xl:block'>
          <p className='text-5xl font-bold text-center lg:text-left w-fit dark:text-yellow-400'>
            Maximilian Falco Widjaya
          </p>
          <p className='text-xl text-center opacity-80 mt-2 lg:mt-1 xl:text-left w-full'>
            Fullstack Developer
          </p>
          <p className='text-l mt-5 text-center xl:text-left word-wrap max-w-[600px] w-full'>
            Hi! I'm Falco, a Computer Science and Business Analytics student at UNSW! Apart from my obvious interest in Computer Science, I'm also very into sports and music (although I don't really play any instruments) 
          </p>
          <p className='text-l mt-5 text-center xl:text-left word-wrap max-w-[600px] w-full'>
            Just like me, this website is still developing! I'm continuously adding new stuff into it so keep an eye out for updates! In the mean time, feel free to scroll down to check out some of the projects I have done!
          </p>
          <div className='flex mt-4 gap-3 w-full justify-center xl:justify-start'>
            <a href={Resume} target='_blank' className='transition-transform hover:scale-105'>
              <div className='w-fit h-10 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg py-1 px-2 flex items-center'>
                <PaperClipIcon className='h-5 w-5 mr-1' />
                My Resume!
              </div>
            </a>
            <a href='https://www.linkedin.com/in/maximilian-falco-widjaya/' target='_blank' className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                className="w-full h-full rounded-lg"
                title='LinkedIn'
                />
            </a>
          </div>
        </section>

      </body>
    </main>
  )
}
