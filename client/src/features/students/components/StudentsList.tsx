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
    <div className="space-y-6 py-3 lg:max-w-4xl">
      <div>
        <h3 className="text-lg font-medium">Students</h3>
        <p className="text-sm text-muted-foreground">
          This is a list of all of the students in the database.
        </p>
      </div>
      <DataTable columns={columns} data={students} />
    </div>
  )
}
