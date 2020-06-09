export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

type Tuple<A, B> = [A, B];

export type BoardTile = Tuple<number, number>;

export type Board = Array<BoardTile>;
