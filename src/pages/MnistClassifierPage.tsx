import ProjectDetailsLayout from './ProjectDetailsLayout'
import MNIST from '../assets/project_screenshots/mnist-1.png'
import Tags from '../components/Tags';

const MnistClassifierPage = () => {
  const tags = ['Python', 'Numpy', 'machine learning', 'neural networks', 'MNIST dataset', 'linear algebra'];
  return (
    <ProjectDetailsLayout title='MNIST Dataset Classifier'>
      <img
        src={MNIST}
        alt="Unilectives"
        className='w-1/2 lg:h-96 object-cover'
      />
      <section className='flex flex-wrap gap-2 mt-4 max-w-[50%] justify-center'>
        {tags.map(tag => <Tags text={tag} />)}
      </section>
      <body className='w-full max-w-[60%] text-center mt-2 flex flex-col gap-6'>
        <p>
          This project was my first attempt at understanding and diving into the world of machine learning. I first became interested in machine learning and LLMs after OpenAI released GPT-3. Before I knew it, my entire YouTube feed was filled with machine learning discussions and tutorials. Then, I decided to watch one and was immediately hooked. This simple project was my first attempt at creating a neural network while also following a tutorial I found online.
        </p>
        <p>
          This project was developed in Python, using only Numpy and no other external libraries. The neural network consists of 2 layers and 1 activation layer. It was trained under the publicly available MNIST dataset, which contains <span className='font-bold'>10000+</span> drawings of numbers from 0 to 9. The neural network was able to achieve an accuracy of <span className='font-bold'>~80-90%</span>.
        </p>
        <p>
          While this project was a fairly simple one, it was a great stepping stone for me to understan the basics of machine learning - also for a bit of refresher on linear algrebra. In the future, I aim to create more complex models and to understand neural networks and machine learning better.
        </p>
      </body>
    </ProjectDetailsLayout>
  )
}

export default MnistClassifierPage