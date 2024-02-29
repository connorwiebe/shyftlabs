import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { client } from '@/api'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

const addStudentFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

type AddStudentForm = z.infer<typeof addStudentFormSchema>

export const AddStudentForm = () => {
  const { toast } = useToast()

  const form = useForm<AddStudentForm>({
    resolver: zodResolver(addStudentFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const { mutate: createStudent } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: AddStudentForm) => {
      const res = await client({
        url: `/api/students`,
        method: 'post',
        data,
      })
      return res.data
    },
    onSuccess: (data) => {
      toast({
        title: 'Student added!',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    },
  })

  const onSubmit = (data: AddStudentForm) => {
    return createStudent(data)
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>Input your first and last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>Input a valid email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button type="submit">Add student</Button>
      </form>
    </Form>
  )
}
