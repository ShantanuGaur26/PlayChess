import Google from '../assets/google.png';

import { useNavigate } from 'react-router-dom';

const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Login = () => {
  const navigate = useNavigate();

  const google = () => {
    window.open(`${BACKEND_URL}/auth/google`, '_self');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen chess-board text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-500 drop-shadow-lg">
        Enter the Game World
      </h1>
      <div className="bg-stone-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
        <div className="mb-8 md:mb-0 md:mr-8 justify-center flex flex-col space-y-4">
          <div
            className="flex items-center justify-center chess-board text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-300"
            onClick={google}
          >
            <img src={Google} alt="Sign in with Google" className="w-6 h-6 mr-2" />
            Sign in with Google
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-600 h-1 w-12 mr-2"></div>
            <span className="text-gray-400">OR</span>
            <div className="bg-gray-600 h-1 w-12 ml-2"></div>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="chess-board text-white px-4 py-2 rounded-md mb-4 w-full md:w-64"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={() => navigate('/game/random')}
          >
            Enter as guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
