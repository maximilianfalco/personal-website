import ProjectCard from "../components/ProjectCard"

import BitTrickleImage from '../assets/project_screenshots/bit-trickle.png'
import MNISTImage from '../assets/project_screenshots/mnist-1.png'
import DiscordBotImage from '../assets/project_screenshots/discord-bot.png'
import AlgoVizImage from '../assets/project_screenshots/algo-viz.png'

const PastProjects = () => {
  return (
    <div className="h-fit flex flex-col items-center xl:items-start">
      <p className='text-5xl font-bold text-center md:text-left w-fit mt-4 lg:mt-0'>
        Past Projects
      </p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 4k:grid-cols-3 lg:gap-x-10 xl:gap-x-20 gap-y-10">
        <ProjectCard 
          title="Bit-Trickle"
          description="A program that allows simulation of transferring data between to systems using a network. The program was written in C and uses both the TCP and UDP protocols."
          image={BitTrickleImage}
          repoLink="https://gist.github.com/maximilianfalco/f629775d47e084f7731c16fda121c47a"
        />
        <ProjectCard 
          title="MNIST Dataset Classifier"
          description="This project was my first attempt at cracking the surface of machine learning. It utilises pure Python and numpy to create a neural network consisting of 2 layers and 1 output layer."
          image={MNISTImage}
          repoLink="https://github.com/maximilianfalco/ml-mnist-dataset-lfs"
        />
        <ProjectCard 
          title="Discord Bot"
          description="At UNSW, I joined COMPClub, a non-profit society who aims to educate highschoolers about computer science. In one of their workshops, I created this bot for the students. The bot was written in Discord.js and was used to create a simple string game!"
          image={DiscordBotImage}
          repoLink="https://github.com/maximilianfalco/discord-bot"
        />
        <ProjectCard 
          title="Algorithm Visualiser"
          description="This project was created to help me understand the algorithms I was learning. The visual aid plus the act of doing allowed me to understand these algorithms better. Plus, their nice to look at! 😋"
          image={AlgoVizImage}
          repoLink="https://github.com/maximilianfalco/algorithm-visualizer"
          demoLink="https://maximilianfalco.github.io/algorithm-visualizer/#/algorithm-visualizer/"
        />
      </div>
    </div>
  )
}

export default PastProjects