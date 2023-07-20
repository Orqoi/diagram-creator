import { Card, Grid, CardContent, Typography } from '@mui/material';



function NodeCard({title, type, setNodes, nodes, icon, getCenter}) {
  
  return (
    <Grid
      item 
      xs={6} 
      sm={6} 
      onClick={() => setNodes(nds => nds.concat({ id: JSON.stringify(nodes.length + 1), type: type, position: getCenter() }))}
    >
      <Card sx={{ minHeight: 85, paddingTop: 1, paddingBottom: 1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#f6f7fb'}}>
        <CardContent sx={{paddingBottom: 1, paddingTop: 0, paddingRight: 0, paddingLeft: 0}}>
          {icon}
        </CardContent>
        <Typography>{title}</Typography>
      </Card>
    </Grid>
  )
}

export default NodeCard;