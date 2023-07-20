import { Card, Grid, CardContent, Typography } from '@mui/material';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';

function NodeCard({title, type, setNodes, nodes}) {
  return (
    <Grid item xs={6} sm={6} onClick={() => setNodes(nds => nds.concat({ id: JSON.stringify(nodes.length + 1), type: type, position: { x: 800, y: 500 }, data: { label: nodes.length + 1 } }))}>
      <Card sx={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#f6f7fb'}}>
        <CardContent>
          <RectangleOutlinedIcon color='primary' sx={{ fontSize: '1rem'}} />
        </CardContent>
        <Typography>{title}</Typography>
      </Card>
    </Grid>
  )
}

export default NodeCard;