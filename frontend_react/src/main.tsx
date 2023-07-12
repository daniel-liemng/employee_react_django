import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import './index.css';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Toaster position='top-center' toastOptions={{ duration: 5000 }} />
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
