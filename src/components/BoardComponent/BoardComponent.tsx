import React from 'react';
import { Board } from '../../interfaces';

interface Props {
  rows: number;
  cols: number;
  tileWidth: number;
  tileHeight: number;
  gap: number;
  data: Board;
  onTileClick: () => void;
}

const BoardComponent = (props: Props) => {
  return props.data.map((tileindex) => <BoardTileComponent />);
};

export default BoardComponent;
