import { Separator } from '@/components/ui/separator'

import { AddStudentForm } from './AddStudentForm'

export const AddStudent = () => {
  return (
    <div className="space-y-6 py-3 lg:max-w-lg">
      <div>
        <h3 className="text-lg font-medium">Add Student</h3>
        <p className="text-sm text-muted-foreground">
          Add a student here and they will show up in the students table.
        </p>
      </div>
      <Separator />
      <AddStudentForm />
    </div>
  )
}
