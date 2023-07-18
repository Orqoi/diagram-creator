import { Stack, Grid, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';

export default function NodeDrawer({ setNodes }) {

  return (
    <Stack direction='row'>
      <Accordion sx={{minWidth: 300}} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{minHeight: 0, minWidth: 0, padding: 0}}>
          <h5>ER General</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} border='1px solid red'>
            <Grid item xs={3}>
              <IconButton onClick={() => setNodes((nds) => nds.concat({ id: '8', type: 'regular', position: { x: 1000, y: 1000 }, data: { label: '8' } }))}>
                <RectangleOutlinedIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
