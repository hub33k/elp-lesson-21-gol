import type { NextPage } from 'next';
import { GameOfLife } from 'game-of-life';
import { useEffect, useState } from 'react';

const HomePage: NextPage = () => {
  const [game, setGame] = useState(new GameOfLife(10, 10));
  const [board, setBoard] = useState(game.getBoard());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Example 1
    game.setCell(0, 1);
    game.setCell(1, 2);
    game.setCell(2, 0);
    game.setCell(2, 1);
    game.setCell(2, 2);

    // Example 2
    // game.setCell(0, 1);
    //
    // game.setCell(1, 0);
    // game.setCell(1, 1);
    // game.setCell(1, 2);
    //
    // game.setCell(2, 0);
    // game.setCell(2, 1);
    // game.setCell(2, 2);

    setIsLoaded(true);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Game of Life</h1>

      {isLoaded && (
        <>
          <table className={'border-collapse border border-slate-500 w-64'}>
            <tbody>
              {board.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex} className={'row'}>
                    {row.map((cell, cellIndex) => {
                      return (
                        <td
                          key={cellIndex}
                          className={`cell border border-slate-700 text-center w-10 h-5 ${
                            cell
                              ? 'bg-slate-700 text-white border-slate-300'
                              : 'bg-white'
                          }`}
                        >
                          {' '}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            className={
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32'
            }
            onClick={() => {
              game.tick();
              setBoard(game.getBoard());
            }}
          >
            tick
          </button>

          <button
            className={
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32'
            }
            onClick={() => {
              const intervalId = setInterval(() => {
                game.tick();
                setBoard(game.getBoard());
              }, 500);
            }}
          >
            start
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
