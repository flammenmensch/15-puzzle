import React from 'react';
import { useMachine } from '@xstate/react/lib';
import BoardComponent from './components/BoardComponent/BoardComponent';
import { getDirectionByKeyCode } from './utils';
import { createMachine } from './state';

const NUM_ROWS = 4;
const NUM_COLS = 4;
const TILE_SIZE = 100;
const GAP = 5;
const NUM_TILES = NUM_COLS * NUM_ROWS;
const EMPTY_INDEX = NUM_TILES - 1;

const gameMachine = createMachine(NUM_ROWS, NUM_COLS, EMPTY_INDEX);

const App = () => {
  const [state, send] = useMachine(gameMachine);

  const handleClick = React.useCallback(
    (index: number) => {
      send({ type: 'CLICK', index });
    },
    [send],
  );

  const handleStart = React.useCallback(() => {
    send({ type: 'START' });
  }, [send]);

  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const direction = getDirectionByKeyCode(event.keyCode);
      if (direction) {
        send({ type: 'MOVE', direction });
      }
    };

    window.addEventListener('keyup', listener);

    return () => window.removeEventListener('keyup', listener);
  }, [send]);

  const board = state.matches('ready')
    ? state.context.originalBoard
    : state.context.board;

  return (
    <div className="game">
      <div className="game__header">
        {state.matches('unsolved') && <span>Moves: {state.context.moves}</span>}
        {state.matches('solved') && <span>Congratulations!</span>}
      </div>
      <BoardComponent
        rows={NUM_ROWS}
        cols={NUM_COLS}
        tileWidth={TILE_SIZE}
        tileHeight={TILE_SIZE}
        gap={GAP}
        board={board}
        onTileClick={handleClick}
      />
    </div>
  );
};

export default App;
