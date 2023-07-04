import { Stack } from '@mui/material';
import 'reactflow/dist/style.css';
import Topbar from './components/Topbar';
import DiagramCreator from './views/DiagramCreator';




function App() {
  

  return (
    <Stack height="100vh" width="100vw">
      <Topbar />
      <DiagramCreator />
      
    </Stack>
  );
}

export default App;
