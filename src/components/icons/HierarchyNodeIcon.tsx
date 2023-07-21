import React from 'react';
import { makeStyles } from '@mui/styles';

const triangleSize = 35; // Set the size of the triangle icon

const useStyles = makeStyles({
  hierarchyIcon: {
    width: triangleSize,
    height: triangleSize
  },
  content: {
    fontSize: '10px',
    fontWeight: 'bold',
    dominantBaseline: 'middle',
    textAnchor: 'middle',
  },
});

const HierarchyNodeIcon = () => {
  const classes = useStyles();

  return (
    <svg className={classes.hierarchyIcon}>
      <polygon points={`0,${triangleSize} ${triangleSize / 2},0 ${triangleSize},${triangleSize}`} fill="white" stroke="black" strokeWidth="1" />
      <text className={classes.content} x={triangleSize / 2} y={(triangleSize / 2) + 5}>ISA</text>
    </svg>
  );
};

export default HierarchyNodeIcon;
