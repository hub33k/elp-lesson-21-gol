import { GameOfLife } from './game-of-life';

describe('GameOfLife', () => {
  it('should return empty board', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('should return empty board when passed a board with a single cell', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    gameOfLife.setCell(1, 1);
    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('should return the value of the provided cell', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    gameOfLife.setCell(1, 1);
    gameOfLife.setCell(1, 2);

    // then
    expect(gameOfLife.getCell(1, 2)).toEqual(1);
  });

  it('should return correct number of neighbors', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    // [0, 0, 0],
    // [0, 0, 0],
    // [0, 0, 0],
    gameOfLife.setCell(0, 0);
    gameOfLife.setCell(0, 1);
    gameOfLife.setCell(0, 2);

    // then
    expect(gameOfLife.getNeighbors(0, 1)).toEqual(2);
  });

  it('should kill cells with one neighbour', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    // [0, 0, 0],
    // [1, 1, 1],
    // [0, 0, 0],
    gameOfLife.setCell(1, 0);
    gameOfLife.setCell(1, 1);
    gameOfLife.setCell(1, 2);

    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]);
  });

  it('should make/keep the cell alive if it has 3 neighbors', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    // [1, 0, 0],
    // [1, 1, 0],
    // [0, 0, 1],
    gameOfLife.setCell(0, 0);
    gameOfLife.setCell(1, 0);
    gameOfLife.setCell(1, 1);
    gameOfLife.setCell(2, 2);

    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]);
  });

  it('should keep cell alive when it has 2 neighbors', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    // [0, 0, 0],
    // [1, 1, 0],
    // [0, 1, 0],
    gameOfLife.setCell(1, 0);
    gameOfLife.setCell(1, 1);
    gameOfLife.setCell(2, 1);

    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]);
  });

  it('should kill cells with more than 3 neighbors', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given
    // [1, 1, 1],
    // [1, 1, 0],
    // [0, 0, 0],
    gameOfLife.setCell(1, 0);
    gameOfLife.setCell(1, 1);
    gameOfLife.setCell(2, 1);

    gameOfLife.tick();

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ]);
  });
});
