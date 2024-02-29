import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { ErrorElement, MainLayout } from '@/components/layout'
import { Toaster } from '@/components/ui/toaster'
import { queryClient } from '@/lib/react-query'

import { StudentRoutes } from './features/students'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: '/students/*', children: StudentRoutes },
      { path: '/', element: <Navigate to="/students" /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider fallbackElement={<div>Loading...</div>} router={router} />
    <Toaster />
  </QueryClientProvider>,
)
