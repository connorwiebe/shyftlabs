'use client'

import { Link, useLocation } from 'react-router-dom'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export const Sidebar = ({ className, items, ...props }: SidebarProps) => {
  const location = useLocation()

  return (
    <nav
      className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}
      {...props}>
      {items.map((item) => {
        return (
          <Button
            key={item.href}
            asChild
            variant="secondary"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              location.pathname === item.href
                ? 'hover:bg-muted'
                : 'bg-transparent hover:bg-transparent hover:underline',
              'justify-start',
            )}>
            <Link to={item.href}>{item.title}</Link>
          </Button>
        )
      })}
    </nav>
  )
}
