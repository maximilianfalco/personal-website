import { useNavigate } from "react-router-dom"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  repoLink?: string
  demoLink?: string
  detailsPageLink : string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description,
  image,
  repoLink,
  demoLink,
  detailsPageLink 
}) => {

  const navigate = useNavigate();
  const handleClick = () => { navigate(`${detailsPageLink}`) }

  return (
    <div onClick={handleClick} className='w-full min-h-60 border-b-2 border-b-grey dark:border-b-slate-400 dark:bg-dark-secondary rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform p-5 flex flex-col cursor-pointer'>
      <p className='text-2xl font-bold text-center lg:text-left w-full'>
        {title || 'Default Title'}
      </p>
      <div className="
        flex 
        flex-grow 
        flex-col
        lg:flex-wrap 
        md:flex-row 
        pt-5 
        gap-5
        overflow-hidden" 
      >
        <div className="relative xl:min-h-full w-full md:w-[35%] lg:w-full xl:w-[30%] aspect-square lg:aspect-auto bg-slate-400 self-center">
          <img
            src={image}
            alt={title || 'Default Title'}
            className='xl:absolute top-0 left-0 object-cover w-full min-h-full'
          />
        </div>
        <div className="w-full lg:w-full xl:w-[65%] flex flex-col justify-between p-0 md:pb-[2px]">
          <p className='text-center md:text-left box-border'>
            {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies.'}
          </p>
          {
            repoLink || demoLink ? (
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
        </div>
      </div>
    </div>
  )
}

export default ProjectCard