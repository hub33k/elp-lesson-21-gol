import type { NextPage } from 'next';
import common, { IHello } from 'common';

class Hello implements IHello {
  name: string;
  range: number;

  constructor(name: string, range: number) {
    this.name = name;
    this.range = range;
  }
}

const HomePage: NextPage = () => {
  console.log(common);

  const hello = new Hello('World', 30);
  console.log(hello);

  return (
    <>
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;
