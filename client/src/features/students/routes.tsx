import { StudentsList } from './components/StudentsList'

export const StudentRoutes = [
  {
    path: '',
    element: <StudentsList />,
    children: [
      // {
      //   path: ':studentId',
      //   element: <Student />,
      // },
    ],
  },
]
