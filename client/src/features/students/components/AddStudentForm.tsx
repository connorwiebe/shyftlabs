import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
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
import { sleep } from '@/lib/utils'

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
  const queryClient = useQueryClient()

  const form = useForm<AddStudentForm>({
    resolver: zodResolver(addStudentFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const { isPending, mutate: createStudent } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: AddStudentForm) => {
      await sleep(1000)

      // generate uuid on client so optimistic updates can be added later
      // https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates
      const res = await client({
        url: `/api/students`,
        method: 'post',
        data: {
          id: crypto.randomUUID(),
          ...data,
        },
      })
      return res.data
    },
    onSuccess: (data) => {
      toast({
        title: 'Success!',
        description: `${data.name} was added to the student list.`,
        duration: 5000,
      })

      return queryClient.invalidateQueries({
        queryKey: ['students'],
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

        <Button type="submit" disabled={isPending}>
          <span className="flex items-center">
            Add student {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </span>
        </Button>
      </form>
    </Form>
  )
}
