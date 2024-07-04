import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import chessIcon from '../../public/chess.png';
import lightningIcon from '../../public/lightning-bolt.png';
import GameModeComponent from './GameModeComponent';

export function PlayCard() {
  const gameModeData = [
    {
      icon: (
        <img
          src={lightningIcon}
          className="inline-block mt-1 h-7 w-7"
          alt="online"
        />
      ),
      title: 'Play Online',
      description: 'Play vs a random person online',
      onClick: () => {
        navigate('/game/random');
      },
      disabled: false,
    },

  ];

  const navigate = useNavigate();
  return (
    <Card className="bg-transparent border-none">
      <CardHeader className="pb-3 text-center text-white shadow-md">
        <CardTitle className="font-semibold tracking-wide flex flex-col items-center justify-center">
          <p>
            Play
            <span className="text-green-700 font-bold pt-1"> Chess</span>
          </p>
          <img className="pl-1 w-1/2 mt-4" src={chessIcon} alt="chess" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 cursor-pointer shadow-md mt-1">
        {gameModeData.map((data) => {
          return <GameModeComponent {...data} />;
        })}
      </CardContent>
    </Card>
  );
}
