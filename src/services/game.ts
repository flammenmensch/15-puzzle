import { Board, BoardTile, Direction } from '../interfaces';
import { getRandomArrayElement } from '../utils';

const DIRECTIONS = [
  Direction.UP,
  Direction.DOWN,
  Direction.LEFT,
  Direction.RIGHT,
];

export const createBoard = (rows: number, cols: number): Board =>
  new Array(rows * cols)
    .fill(0)
    .map((item: number, index) => [Math.floor(index / rows), index % cols]);

export const shuffle = (
  board: Board,
  iterationCount: number,
  emptyIndex: number,
) =>
  new Array(iterationCount).fill(0).reduce((previousBoard) => {
    const direction = getRandomArrayElement(DIRECTIONS);

    const index = getMovingTileIndex(previousBoard, direction, emptyIndex);

    return moveTile(previousBoard, index, emptyIndex);
  }, board);

export const size = (board: Board) => board.length;

export const areEqual = (a: Board, b: Board) =>
  a.every((tile, index) => tile[0] === b[index][0] && tile[1] === b[index][1]);

export const indexOutOfRange = (board: Board, index: number) =>
  index < 0 || index >= size(board);

export const canMoveTile = (
  board: Board,
  index: number,
  emptyIndex: number,
) => {
  const tilePosition = board[index];
  const emptyPosition = board[emptyIndex];

  if (tilePosition[0] === emptyPosition[0]) {
    return Math.abs(tilePosition[1] - emptyPosition[1]) === 1;
  }

  if (tilePosition[1] === emptyPosition[1]) {
    return Math.abs(tilePosition[0] - emptyPosition[0]) === 1;
  }

  return false;
};

export const moveTile = (board: Board, index: number, emptyIndex: number) => {
  if (indexOutOfRange(board, index)) {
    return board;
  }

  if (!canMoveTile(board, index, emptyIndex)) {
    return board;
  }

  const tilePosition = [...board[index]] as BoardTile;
  const emptyPosition = [...board[emptyIndex]] as BoardTile;

  const newBoard = [...board];

  newBoard[emptyIndex] = tilePosition;
  newBoard[index] = emptyPosition;

  return newBoard;
};

export const calculatePosition = (
  emptyTile: BoardTile,
  direction: Direction,
) => {
  switch (direction) {
    case Direction.UP:
      return [emptyTile[0] + 1, emptyTile[1]];
    case Direction.DOWN:
      return [emptyTile[0] - 1, emptyTile[1]];
    case Direction.LEFT:
      return [emptyTile[0], emptyTile[1] + 1];
    case Direction.RIGHT:
      return [emptyTile[0], emptyTile[1] - 1];
    default:
      return emptyTile;
  }
};

export const getMovingTileIndex = (
  board: Board,
  direction: Direction,
  emptyIndex: number,
) => {
  const emptyPosition = board[emptyIndex];

  const positionToMove = calculatePosition(emptyPosition, direction);

  for (let i = 0; i < size(board); i++) {
    if (
      board[i][0] === positionToMove[0] &&
      board[i][1] === positionToMove[1]
    ) {
      return i;
    }
  }

  return emptyIndex;
};

export const isSolved = (board: Board, solvedBoard: Board) =>
  areEqual(board, solvedBoard);
