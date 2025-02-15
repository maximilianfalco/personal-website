import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/`)} className='absolute top-6 left-6 font-bold cursor-pointer hover:underline'>
      {"<- back"}
    </div>
  )
}

export default BackToHomeButton