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
});
