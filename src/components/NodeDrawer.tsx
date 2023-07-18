import { Card, InputAdornment, Stack, Grid, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NodeCard from './NodeCard';

export default function NodeDrawer({ setNodes }) {

  return (
    <Stack direction='column' sx={{minWidth: 300, borderLeft: '1px solid lightgrey', borderRight:'1px solid lightgrey', pt: 3}}>
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
            flexGrow={1}
            border='1px solid red'>
            <NodeCard/>
            <NodeCard/>
            <NodeCard/>
            <NodeCard/>
          </Grid>
    </Stack>
  );
}
