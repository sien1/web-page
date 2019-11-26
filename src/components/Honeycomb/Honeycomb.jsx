import React from 'react';
import HexagonGrid from 'react-hexagon-grid';

const hexagons = [... /* Put your content here */];

React.render(
  <HexagonGrid
    gridWidth={300}
    gridHeight={200}
    hexagons={hexagons}
  />,
  document.getElementById('root')
);