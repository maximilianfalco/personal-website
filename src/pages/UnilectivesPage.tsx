import UnilectivesScreenShot from '../assets/project_screenshots/unilectives-1.png'
import Tags from '../components/Tags'
import ProjectDetailsLayout from './ProjectDetailsLayout'

const UnilectivesPage = () => {
  const tags = ['next.js', 'typescript', 'tailwindcss', 'mysql', 'prisma']
  return (
    <ProjectDetailsLayout title='Unilectives' demoLink='https://unilectives.devsoc.app/'>
      <img
        src={UnilectivesScreenShot}
        alt="Unilectives"
        className='w-1/2'
      />
      <section className='flex flex-wrap gap-2 mt-4 max-w-[50%] justify-center'>
        {tags.map(tag => <Tags text={tag} />)}
      </section>
      <body className='w-full max-w-[60%] text-center mt-2 flex flex-col gap-6'>
        <p>
          Unilectives is a web application developed by UNSW DevSoc. It aims to help UNSW students find electives that are interesting to them and acts as a platform for students to review these electives. While not being the original developers of this web application, I was fortunate enough to become part of the team that managed and maintained the project throughout 2024.
        </p>
        <p>
          Joining the team was a huge learning experience for me and I would like to thank the entire team alongside my two directors Dylan and Dimas. While not being the most experienced team member, they still taught me new things and kept on pushing me to do better.
        </p>
        <p>
          Alongside learning the trades of web development, I was also able to learn and polish my teamworking skills. I was able to work with a team of 9 people to bring about major improvements to the project. Together, we were able to expand our database by adding more than <span className='font-bold'>2000</span> reviews. We also did some cleanup and maintainance on the backend of the project to ensure that future iterations of the project would be easier to manage. Last but not least, we were also able to further improve some UI/UX aspects while also adding a wrapped feature to the project.
        </p>
      </body>
    </ProjectDetailsLayout>
  )
}

export default UnilectivesPage