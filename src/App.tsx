import { Stack } from '@mui/material';
import 'reactflow/dist/style.css';
import Topbar from './components/Topbar';
import DiagramCreator from './views/DiagramCreator';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#131c3b',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#fff',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <Stack height="100vh" width="100vw">
        <Topbar />
        <DiagramCreator />
        
      </Stack>
    </ThemeProvider>
    
  );
}

export default App;
