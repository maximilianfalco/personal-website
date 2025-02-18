import BackToHomeButton from '../components/BackToHomeButton'
import DarkLightToggle from '../components/DarkLightToggle'

interface ProjectDetailsLayoutProps {
  children: React.ReactNode,
  title: string,
  demoLink?: string,
  repoLink?: string,
}

const ProjectDetailsLayout: React.FC<ProjectDetailsLayoutProps> = ({
  children,
  title,
  demoLink,
  repoLink
}) => {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-6 mt-24 md:mt-10'>
      <BackToHomeButton />
      <DarkLightToggle />
      <p className='text-5xl font-bold text-center'>
        {title}
      </p>
      {children}
      <footer>
        {
          repoLink || demoLink ? 
            (
              <div className="flex gap-4 justify-center md:justify-start mt-4">
                {
                  repoLink ? (
                    <a href={repoLink} target="_blank" className="text-blue-800 dark:text-orange-400 hover:underline">
                      Repo Link
                    </a>
                  ) : null
                }
                {
                  demoLink ? (
                    <a href={demoLink} target="_blank" className="text-blue-800 dark:text-orange-400 hover:underline">
                      Demo Link
                    </a>
                  ) : null
                }
              </div>
            ) : null
          }
      </footer>
      <div className='mt-4'></div>
    </div>
  )
}

export default ProjectDetailsLayout