type Player = 'X' | 'O';
type Board = (Player | null)[];

class Game {
  private board: Board;
  private currentPlayer: Player;
  private winner: Player | null;

  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }

  public makeMove(position: number): boolean {
    if (!this.board[position] && !this.winner) {
      this.board[position] = this.currentPlayer;
      this.winner = this.calculateWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      return true;
    }
    return false;
  }

  public getBoard(): Board {
    return this.board;
  }

  public getWinner(): Player | null {
    return this.winner;
  }

  private calculateWinner(): Player | null {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }

    return null;
  }
}

export default Game;
