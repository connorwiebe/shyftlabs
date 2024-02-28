import { Navigate, useRoutes } from 'react-router-dom'

import { StudentRoutes } from '@/features/students'

export const Routes = () => {
  const element = useRoutes([
    { path: '/students/*', children: StudentRoutes },
    { path: '/', element: <div>App..</div> },
    { path: '*', element: <Navigate to="." /> },
  ])

  return element
}
