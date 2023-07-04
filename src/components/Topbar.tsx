import { AppBar } from '@mui/material';

function Topbar() {
  return (
    <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}><h2 style={{textAlign:'center'}}>App Bar</h2></AppBar>
  )
}

export default Topbar