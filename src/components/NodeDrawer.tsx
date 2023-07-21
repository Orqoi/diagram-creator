import { InputAdornment, Stack, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NodeTypes from '../constants/NodeTypes';
import CustomAccordion from './CustomAccordion';
import { useState } from 'react'

export default function NodeDrawer({ setNodes, nodes, getCenter, connectionEdge, setConnectionEdge }) {
  const [data, setData] = useState(NodeTypes)

  return (
    
    <Stack direction='column' sx={{width: 600, paddingLeft: 1, paddingRight: 1, borderLeft: '1px solid lightgrey', borderRight:'1px solid lightgrey', pt: 3, alignItems: 'center'}}>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 3, m: 1, borderBottom: '1px solid lightgrey'}}>
            <TextField 
              placeholder='Search Here'
              onChange={(e) => setData(NodeTypes.filter(item => item.description.toLowerCase().includes(e.target.value.toLowerCase())))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
            }}/>
      </Box>
      <Stack direction='column' alignItems='center' width='100%' maxHeight='70vh' sx={{paddingLeft: 1, paddingRight: 1, paddingBottom: 1, overflowY:'auto'}}>
        <CustomAccordion title="Constraints" data={data.filter(item => item.type === 'constraint')} connectionEdge={connectionEdge} setConnectionEdge={setConnectionEdge} getCenter={getCenter} nodes={nodes} setNodes={setNodes}/>
        <CustomAccordion title="Entities" data={data.filter(item => item.type === 'entity')} getCenter={getCenter} nodes={nodes} setNodes={setNodes}/>
        <CustomAccordion title="Relations" data={data.filter(item => item.type === 'relation')} getCenter={getCenter} nodes={nodes} setNodes={setNodes}/>
        <CustomAccordion title="Attributes and Miscallaneous" data={data.filter(item => item.type === 'miscallaneous' || item.type === 'attribute')} getCenter={getCenter} nodes={nodes} setNodes={setNodes}/>
        
      </Stack>
      
    </Stack>
  );
}
