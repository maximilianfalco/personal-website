import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.tsx';
import UnilectivesPage from './pages/UnilectivesPage.tsx';
import BitTricklePage from './pages/BitTricklePage.tsx';
import MnistClassifierPage from './pages/MnistClassifierPage.tsx';
import DiscordBotPage from './pages/DiscordBotPage.tsx';
import AlgoVizPage from './pages/AlgoVizPage.tsx';

function App() {  
  return (
    <>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/unilectives`} element={<UnilectivesPage />} />
        <Route path={`/bit-trickle`} element={<BitTricklePage />} />
        <Route path={`/mnist-dataset-classifier`} element={<MnistClassifierPage />} />
        <Route path={`/discord-bot`} element={<DiscordBotPage />} />
        <Route path={`/algorithm-visualizer`} element={<AlgoVizPage />} />
      </Routes>
    </>
  )
}

export default App;
