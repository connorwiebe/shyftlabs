import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Sidebar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Shyftlabs</h2>
          <div className="space-y-1">
            <Button asChild variant="secondary" className="w-full justify-start">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/students">Student List</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
