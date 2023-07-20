import { InputAdornment, Stack, Grid, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NodeCard from './NodeCard';
import NodeTypes from '../constants/NodeTypes';

export default function NodeDrawer({ setNodes, nodes }) {

  return (
    <Stack direction='column' sx={{width: 600, paddingLeft: 1, paddingRight: 1, borderLeft: '1px solid lightgrey', borderRight:'1px solid lightgrey', pt: 3}}>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 3, m: 1, borderBottom: '1px solid lightgrey'}}>
            <TextField 
              placeholder='Search Here'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
            }}/>
          </Box>
        
          <Grid 
            container
            spacing={1}
            maxHeight='80%'
            sx={{paddingLeft: 1, paddingRight: 1, paddingBottom: 1, overflowY:'auto'}}
            >
            {NodeTypes.map((nodeType, idx) => <NodeCard key={idx} icon={nodeType.icon} type={nodeType.title} title={nodeType.description} setNodes={setNodes} nodes={nodes}/>)}
          </Grid>
    </Stack>
  );
}
