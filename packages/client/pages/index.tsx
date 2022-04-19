import type { NextPage } from 'next';
import { GameOfLife } from 'game-of-life';

const HomePage: NextPage = () => {
  const gol = new GameOfLife(3, 3);
  console.log(gol);

  return (
    <>
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;
