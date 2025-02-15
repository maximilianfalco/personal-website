import { Routes, Route } from 'react-router-dom';
import { FixedURL } from './utils/constants.tsx';
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
        <Route path={`${FixedURL}/`} element={<HomePage />} />
        <Route path={`${FixedURL}/unilectives`} element={<UnilectivesPage />} />
        <Route path={`${FixedURL}/bit-trickle`} element={<BitTricklePage />} />
        <Route path={`${FixedURL}/mnist-dataset-classifier`} element={<MnistClassifierPage />} />
        <Route path={`${FixedURL}/discord-bot`} element={<DiscordBotPage />} />
        <Route path={`${FixedURL}/algo-viz`} element={<AlgoVizPage />} />
      </Routes>
    </>
  )
}

export default App;
