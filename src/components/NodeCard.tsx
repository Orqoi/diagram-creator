import { Card, Stack, Grid, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import SearchIcon from '@mui/icons-material/Search';

function NodeCard() {
  return (
    <Grid item xs={6}>
              <Card sx={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#f6f7fb'}}>
                <CardContent>
                  <RectangleOutlinedIcon color='primary' sx={{ fontSize: '1rem'}} />
                </CardContent>
                <Typography>Regular Entity</Typography>
              </Card>
            </Grid>
  )
}

export default NodeCard