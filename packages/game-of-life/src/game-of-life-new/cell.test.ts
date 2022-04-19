type ICellState = 1 | 0;

class Cell {
  constructor(private state: ICellState, private neighbours: Array<Cell>) {}

  public getState(): ICellState {
    return this.state;
  }
}

describe('cell', () => {
  it('should return initial cell state', () => {
    const cell = new Cell(0, []);
    expect(cell.getState()).toBe(0);
  });

  it('should change cell state', () => {
    const cell = new Cell(0, []);
    cell.changeState();
    expect(cell.getState()).toBe(1);
  });
});
