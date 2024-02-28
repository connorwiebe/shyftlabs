import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorElement, MainLayout } from '@/components/layout'
import { queryClient } from '@/lib/react-query'

import { Routes } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/*',
        element: <Routes />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider fallbackElement={<div>Loading...</div>} router={router} />
  </QueryClientProvider>,
)
