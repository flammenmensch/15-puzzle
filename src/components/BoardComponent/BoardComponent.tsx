import React from 'react';
import { Board } from '../../interfaces';
import TileComponent from '../TileComponent/TileComponent';

import './BoardComponent.scss';

interface Props {
  rows: number;
  cols: number;
  tileWidth: number;
  tileHeight: number;
  gap: number;
  board: Board;
  onTileClick: (index: number) => void;
}

const BoardComponent = (props: Props) => {
  const { tileWidth, tileHeight, gap, rows, cols, onTileClick } = props;

  return (
    <div className="board">
      {props.board.slice(0, -1).map((tile, index) => {
        const top = tile[0] * tileWidth + gap;
        const left = tile[1] * tileHeight + gap;
        const bgLeft = (index % rows) * tileWidth + gap;
        const bgTop = Math.floor(index / cols) * tileHeight + gap;

        const handleClick = () => {
          onTileClick && onTileClick(index);
        };

        return (
          <TileComponent
            key={index}
            onClick={handleClick}
            style={{
              top,
              left,
              backgroundPosition: `-${bgLeft}px -${bgTop}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BoardComponent;
