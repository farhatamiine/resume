import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Resume from './screens/Resume/Resume';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box height="100%" boxSizing="border-box" p={3}>
        <Resume />
      </Box>
    </ChakraProvider>
  );
}

export default App;
