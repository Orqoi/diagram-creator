import { Card, Grid, CardContent, Typography } from '@mui/material';



function NodeCard({title, type, setNodes, nodes, icon, getCenter, connectionEdge, setConnectionEdge }) {
  const handleAddNode = () => setNodes(nds => nds.concat({ id: JSON.stringify(nodes.length + 1), type: type, position: getCenter() }))
  const handleSelectEdgeType = () => setConnectionEdge(type)
  const clickHandler = setConnectionEdge ? handleSelectEdgeType : handleAddNode
  
  return (
    <Grid
      item 
      xs={6} 
      sm={6} 
      onClick={clickHandler}
    >
      <Card 
        sx={{ 
          minHeight: 85, 
          paddingTop: 1, 
          paddingBottom: 1, 
          display:'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          cursor: 'pointer', 
          backgroundColor: type === connectionEdge ? '#cacacc' : '#f6f7fb'
        }}>
        <CardContent sx={{paddingBottom: 1, paddingTop: 0, paddingRight: 0, paddingLeft: 0}}>
          {icon}
        </CardContent>
        <Typography align='center'>{title}</Typography>
      </Card>
    </Grid>
  )
}

export default NodeCard;