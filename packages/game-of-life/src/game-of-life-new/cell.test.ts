describe('cell', () => {
  it('should return initial cell state', () => {
    const cell = new Cell(0, []);
    expect(cell.getState()).toBe(0);
  });
});
