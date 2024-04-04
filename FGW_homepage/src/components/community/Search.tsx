import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='flex items-center overflow-hidden rounded-md'>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        className='text-white border-secondary rounded-r-none'
        value={searchQuery}
        placeholder='Search ...'
      />
      <Button className='rounded-l-none' variant={'secondary'}>
        Search
      </Button>
    </div>
  )
}
