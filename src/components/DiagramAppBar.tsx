import React from 'react'
import { AppBar, Container, Typography, Toolbar, Stack, Breadcrumbs, Link, Avatar, AvatarGroup, Box, Button } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';

function DiagramAppBar() {
  return (
    <AppBar color='secondary' position='static' elevation={0} sx={{borderBottom: '1px solid grey'}}>
        <Container maxWidth={false}>
            <Toolbar disableGutters>
                <Stack sx={{flexGrow: 1, margin:'0.75rem 1rem'}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5" component="h2" >Document Title</Typography>
                </Stack>
                <Box sx={{ flexGrow: 0, display: 'flex'}}>
                    <AvatarGroup total={10}>
                        <Avatar>H</Avatar>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </AvatarGroup>
                </Box>
                <Box sx={{ flexGrow: 0, display: 'flex', ml: 2}}>
                    <Button size='large' variant='contained'>
                        <ShareIcon sx={{mr: 1}} />
                        <Typography>Share</Typography>
                    </Button>
                </Box>
                
                
            </Toolbar>
            
        </Container>
        
    </AppBar>
  )
}

export default DiagramAppBar