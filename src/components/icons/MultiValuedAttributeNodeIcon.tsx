import React from 'react';
import { makeStyles } from '@mui/styles';

const height = 35;
const width = 70; // Set a fixed width for the icon
const borderRadius = '50%'; // Set the border radius for the icon

const useStyles = makeStyles({
  multiValuedAttributeIcon: {
    height: height,
    width: width,
    border: '3px double black',
    background: '#fff',
    borderRadius: borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MultiValuedAttributeNodeIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.multiValuedAttributeIcon}>
      {/* You can add any design elements inside the div if needed */}
      {/* For example, you can add an SVG icon or any other graphics */}
    </div>
  );
};

export default MultiValuedAttributeNodeIcon;
