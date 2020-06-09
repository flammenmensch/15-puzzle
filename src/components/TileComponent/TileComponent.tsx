import React from 'react';

import './TileComponent.scss';

interface Props {
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TileComponent = ({ style, onClick }: Props) => (
  <div className="tile" onClick={onClick} style={style} />
);

export default React.memo(TileComponent);
