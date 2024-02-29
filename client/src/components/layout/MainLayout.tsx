import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/layout'
import { Separator } from '@/components/ui/separator'

const sidebarItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Students',
    href: '/students',
  },
  {
    title: 'Add Student',
    href: '/students/add',
  },
]

export const MainLayout = () => {
  return (
    <div className="space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Shyftlabs</h2>
        <p className="text-muted-foreground">Take-home assessment</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <Sidebar items={sidebarItems} />
        </aside>
        <div className="flex-1 lg:max-w-4xl">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
