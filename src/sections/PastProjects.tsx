import ProjectCard from "../components/ProjectCard"

const PastProjects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <p className='text-5xl font-bold text-center md:text-left w-fit mt-4 lg:mt-0'>
        Past Projects
      </p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default PastProjects