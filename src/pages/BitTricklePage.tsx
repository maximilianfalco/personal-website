import Tags from '../components/Tags';
import ProjectDetailsLayout from './ProjectDetailsLayout'
import BitTrickle from '../assets/project_screenshots/bit-trickle.png'

const BitTricklePage = () => {
  const tags = ["UDP", "TCP", "python", 'socket programming', 'multithreading', 'computer networks', 'p2p'];
  return (
    <ProjectDetailsLayout title='Bit-Trickle' repoLink='https://gist.github.com/maximilianfalco/f629775d47e084f7731c16fda121c47a'>
      <img
        src={BitTrickle}
        alt="Unilectives"
        className='w-1/2'
      />
      <section className='flex flex-wrap gap-2 mt-4 max-w-[50%] justify-center'>
        {tags.map(tag => <Tags text={tag} />)}
      </section>
      <body className='w-full max-w-[60%] text-center mt-2 flex flex-col gap-6'>
        <p>
          Bit-Trickle was a project of mine that I took on during my university studies, specifically during taking a computer networks class. The project was to develop a peer-to-peer file sharing system that would allow users to simultaneously download and upload files to each other. The project was developed in Python and made use of both the TCP and UDP protocols.
        </p>
        <p>
          The system architecture was fairly simple, consisting of peers and a singular tracker (server). This tracker would act as the server, keeping track of who has what files and which users are online. The users will then "log in" and connect to the tracker to get a list of online users and the files that are currently available. Requesting the download of a file and publishing of files are all handled by the tracker. 
        </p>
        <p>
          Despite the heavy workload of the tracker, the tracker's system is actually less complex than the user. The user's systems boasts a multithreaded approach, being able to create a thread to download a file and another to upload a file. This allows the user to download and upload files simultaneously. In the benchmark test, the system was able to download large files without any error (except for issues regarding latency) and was able to withstand 5 simultaneously active users.
        </p>
      </body>
    </ProjectDetailsLayout>
  )
}

export default BitTricklePage