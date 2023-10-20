import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { MantineProvider } from '@mantine/core';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </ChakraProvider>
  </React.StrictMode>
);

