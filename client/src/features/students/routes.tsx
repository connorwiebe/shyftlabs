import { AddStudent } from './components/AddStudent'
import { StudentsList } from './components/StudentsList'

export const StudentRoutes = [
  {
    path: '',
    element: <StudentsList />,
  },
  {
    path: 'add',
    element: <AddStudent />,
  },
]
