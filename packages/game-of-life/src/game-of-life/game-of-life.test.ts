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
});
