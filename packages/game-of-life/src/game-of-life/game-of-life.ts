import _ from 'lodash';

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

  getCell(row: number, col: number) {
    return this.board[row][col];
  }

  setCell(row: number, col: number) {
    this.board[row][col] = 1;
  }

  getNeighbors(row: number, col: number) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (
          (i === row && j === col) ||
          i < 0 ||
          j < 0 ||
          i >= this.row ||
          j >= this.row
        ) {
          continue;
        }

        if (this.getCell(i, j)) {
          count++;
        }
      }
    }
    return count;
  }

  tick() {
    const tempBoard = _.cloneDeep(this.board);
    const tempBoard2 = _.cloneDeep(this.board);
    tempBoard.forEach((row: number[], i: number) => {
      row.forEach((cell: number, j: number) => {
        const neighborCount = this.getNeighbors(i, j);
        if (neighborCount === 3) {
          tempBoard2[i][j] = 1;
        } else if (neighborCount > 3) {
          tempBoard2[i][j] = 0;
        } else if (neighborCount === 2 && this.getCell(i, j) === 1) {
          tempBoard2[i][j] = 1;
        } else {
          tempBoard2[i][j] = 0;
        }
      });
    });
    this.board = tempBoard2;
  }
}
