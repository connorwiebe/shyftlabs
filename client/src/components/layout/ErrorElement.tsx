import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export const ErrorElement = () => {
  const routeError = useRouteError()

  if (!isRouteErrorResponse(routeError)) {
    return null
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Error</h3>
      <p className="leading-7 text-gray-500">
        {routeError.status} {routeError.statusText}
      </p>
      <Button asChild className="mt-5">
        <Link to="/">Go back</Link>
      </Button>
    </div>
  )
}
