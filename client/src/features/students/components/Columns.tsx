import { ColumnDef } from '@tanstack/react-table'

import { Student } from '../types'

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'created',
    header: 'Created',
  },
]
