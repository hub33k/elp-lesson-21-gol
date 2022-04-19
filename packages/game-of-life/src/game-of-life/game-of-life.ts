export class GameOfLife {
  row: number;
  col: number;
  board: number[][];
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.board = new Array(row);
    for (let i = 0; i < row; i++) {
      this.board[i] = new Array(col);
      for (let j = 0; j < col; j++) {
        this.board[i][j] = 0;
      }
    }
  }
  getBoard() {
    return this.board;
  }
}
