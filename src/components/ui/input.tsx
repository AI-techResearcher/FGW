import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    register?: (name: string) => void; // Adjust type of register prop
    name?: string; // Name prop for registering input
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, register, name, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...(register && name ? register(name) : {})}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
