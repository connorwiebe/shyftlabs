import { useQuery } from '@tanstack/react-query'

import { client } from '@/api'

import { Student } from '../types'
import { columns } from './Columns'
import { DataTable } from './DataTable'

export const StudentsList = () => {
  const { isLoading, data: students = [] } = useQuery<Student[]>({
    queryKey: ['students'],
    queryFn: async () => {
      const res = await client({
        url: `/api/students`,
        method: 'get',
      })

      return res.data
    },
  })

  if (isLoading) {
    return null
  }

  return (
    <div className="mx-auto py-10">
      <DataTable columns={columns} data={students} />
    </div>
  )
}
