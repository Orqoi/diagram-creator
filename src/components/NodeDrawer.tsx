import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Stack, Toolbar, Button, Drawer, List, Divider, ListItem, ListItemButton } from '@mui/material';
import {useState} from 'react'



export default function NodeDrawer() {
  const [openDrawer, setOpenDrawer] = useState(true)
  const drawerWidth = openDrawer ? 240 : 0;
  return (
    <Stack direction="row">
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open={openDrawer}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <h5>Entities</h5>
          <List>
            {['Inbox', 'Starred'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <h5>Attributes</h5>
          <List>
            {['All mail', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <h5>Relations</h5>
          <List>
            {['Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <h5>Constraints</h5>
          <List>
            {['All mail', 'Trash'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Button onClick={() => setOpenDrawer(!openDrawer)}> {openDrawer ? <ChevronLeftIcon /> : <ChevronRightIcon /> }</Button>
    </Stack>
    
  );
}