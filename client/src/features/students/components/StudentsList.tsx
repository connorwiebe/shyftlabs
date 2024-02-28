import { useQuery } from '@tanstack/react-query'

export const StudentsList = () => {
  const { isLoading, data: students = [] } = useQuery({
    queryKey: ['students'],
    queryFn: () => {
      return ['a', 'b', 'c']
    },
  })

  if (isLoading) {
    return null
  }

  return (
    <div className="w-full max-w-5xl border-2 border-green-500">
      {students.map((student) => {
        return <span key={student}>{JSON.stringify(student, null, 2)}</span>
      })}
    </div>
  )
}
