import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  triangle: {
    position: 'relative',
    width: 0,
    height: 0,
    borderBottom: 'none',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderTop: '100px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
});

function HierarchyNode() {
  const classes = useStyles();

  return (
    <div className={classes.triangle}>
      <div className={classes.content}>ISA</div>
    </div>
  );
}

export default HierarchyNode;