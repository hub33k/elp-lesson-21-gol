import { GameOfLife } from './game-of-life';

describe('GameOfLife', () => {
  it('should return empty board', () => {
    // when
    const gameOfLife = new GameOfLife(3, 3);

    // given

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

    // then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
