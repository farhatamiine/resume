import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Resume from './screens/Resume/Resume';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Resume />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
