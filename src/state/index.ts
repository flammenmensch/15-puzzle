import { Board, Direction } from '../interfaces';
import { assign, Machine, MachineConfig, MachineOptions } from 'xstate';
import * as game from '../services/game';
import { rand } from '../utils';

interface GameContext {
  moves: number;
  originalBoard: Board;
  board: Board;
  emptyIndex: number;
}

interface GameSchema {
  states: {
    ready: {};
    unsolved: {};
    solved: {};
  };
}

type GameEvent =
  | { type: 'START' }
  | { type: 'MOVE'; direction: Direction }
  | { type: 'CLICK'; index: number }
  | { type: 'UNDO' };

export const createMachine = (
  rows: number,
  cols: number,
  emptyIndex: number,
) => {
  const config: MachineConfig<GameContext, GameSchema, GameEvent> = {
    key: 'game',
    initial: 'ready',
    context: {
      moves: 0,
      board: [],
      originalBoard: game.createBoard(rows, cols),
      emptyIndex: emptyIndex,
    },
    states: {
      ready: {
        on: {
          '': {
            target: 'unsolved',
            actions: ['SHUFFLE'],
          },
        },
      },
      unsolved: {
        on: {
          MOVE: [
            {
              target: 'solved',
              cond: 'isSolved',
            },
            {
              target: 'unsolved',
              internal: true,
              actions: ['MOVE_BY_DIRECTION', 'INCREMENT_MOVES'],
            },
          ],
          CLICK: [
            {
              target: 'solved',
              cond: 'isSolved',
            },
            {
              target: 'unsolved',
              internal: true,
              actions: ['MOVE_BY_INDEX', 'INCREMENT_MOVES'],
            },
          ],
        },
      },
      solved: {
        type: 'final',
      },
    },
  };

  const options: Partial<MachineOptions<GameContext, GameEvent>> = {
    guards: {
      isSolved: (context) =>
        game.isSolved(context.board, context.originalBoard),
    },
    actions: {
      SHUFFLE: assign({
        board: (context) =>
          game.shuffle(context.originalBoard, rand(60, 80), context.emptyIndex),
      }),
      MOVE_BY_DIRECTION: assign({
        board: (context, event) => {
          const index = game.getMovingTileIndex(
            context.board,
            // @ts-ignore
            event.direction,
            context.emptyIndex,
          );
          return game.moveTile(context.board, index, context.emptyIndex);
        },
      }),
      MOVE_BY_INDEX: assign({
        board: (context, event) => {
          // @ts-ignore
          return game.moveTile(context.board, event.index, context.emptyIndex);
        },
      }),
      INCREMENT_MOVES: assign({
        moves: (context) => context.moves + 1,
      }),
    },
  };

  return Machine<GameContext, GameSchema, GameEvent>(config, options);
};
