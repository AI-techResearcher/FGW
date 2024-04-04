import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LuChevronsUpDown, LuCheck } from 'react-icons/lu'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const categoryList = [
  { name: 'CFA Level 1' },
  { name: 'CFA Level 2' },
  { name: 'CFA Level 3' },

  { name: 'CAIA Level 1' },
  { name: 'CAIA Level 2' },

  { name: 'FRM Level 1' },
  { name: 'FRM Level 2' },

  { name: 'CIPM Level 1' },
  { name: 'CIPM Level 2' },

  { name: 'CFA ESG Investing' },

  { name: 'GARP SCR' },
]

function Filter() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className='dark'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            role='combobox'
            aria-expanded={open}
            className='w-[200px] justify-between gap-3 bg-red-700'
            style={{
              background: '#0f172a',
              color: '#94a3b8',
            }}
          >
            {value
              ? categoryList.find((framework) => framework.name === value)?.name
              : 'Select category'}
            <LuChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput
              className='text-gray-400'
              placeholder='Search framework...'
            />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {categoryList.map((framework) => (
                <CommandItem
                  key={framework.name}
                  className='text-gray-200'
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <LuCheck
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Filter
