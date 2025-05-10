import './index.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { QueryProviders } from '@/provider/QueryProvider.tsx';
import { router } from '@/routers';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <QueryProviders>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProviders>
  </StrictMode>
);
