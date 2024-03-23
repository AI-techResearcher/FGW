// Import required dependencies and components
import { FaRegTrashCan } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import useInputChange from '@/lib/hooks/useInput'

// Define the props interface for the NotebookCard component
interface INotebookCard {
  title: string
  content: string
  showSelect?: boolean
  onChange?: () => void
}

// Define and export the NotebookCard component
export default function NotebookCard(e: INotebookCard) {
  // Use the useInputChange hook to manage input state
  const { inputValues, handleInputChange } = useInputChange()

  // State for managing the checked state of the checkbox
  const [isChecked, setIsChecked] = useState(e.showSelect || false)

  // Effect to trigger onChange callback when the checked state changes
  useEffect(() => {
    if (e.onChange) {
      e.onChange()
    }
  }, [isChecked])

  // Return the JSX structure for the NotebookCard component
  return (
    <Card
      className={`border dark:border-gray-800 shadow-sm max-w-2xl bg-[#F1F9F2] card`}
    >
      <div className='flex'>
        {/* Dialog component for displaying detailed information */}
        <Dialog>
          <DialogTrigger>
            <div role='button' className='flex gap-0.5'>
              {/* Title and Print button */}
              <p className='text-lg font-[500] flex-1 text-left'>{e.title}</p>
              <button className='px-3 py-1 h-fit text-xs rounded-md bg-[#3DA488] text-white flex gap-2 items-center justify-center'>
                <FaPrint />
                Print
              </button>
            </div>
            {/* Content preview */}
            <p className='text-xs font-[500] text-muted-foreground mt-2 text-left'>
              {e.content?.slice(0, 200) + '...'}
            </p>
          </DialogTrigger>
          {/* Dialog content with input fields */}
          <DialogContent>
            <div className='space-y-5 mt-5'>
              {/* Input field for note title */}
              <div>
                <Input
                  placeholder='note title'
                  name='title'
                  value={inputValues.title || e.title}
                  onChange={handleInputChange}
                />
              </div>
              {/* Textarea for notebook content */}
              <div className='h-full'>
                <Textarea
                  placeholder='notebook content'
                  className='h-full'
                  name='content'
                  value={inputValues.content || e.content}
                  onChange={handleInputChange as never}
                />
              </div>
            </div>
            {/* Dialog footer with delete and save buttons */}
            <DialogFooter>
              <Button variant={'destructive'}>Delete</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Section with checkbox and delete icon */}
      <div className='flex justify-end gap-3 items-center'>
        {/* Checkbox for selecting the notebook */}
        {e.onChange && (
          <button
            onClick={() => setIsChecked(!isChecked)}
            className={`border border-gray-400 w-4 h-4 flex items-center justify-center rounded-md ${
              isChecked ? 'bg-[#006aff] text-white' : ''
            }`}
          >
            {isChecked && <FaCheck className='w-3 h-3' />}
          </button>
        )}
        {/* Delete icon for deleting the notebook */}
        {!e.onChange && <FaRegTrashCan className='text-base text-red-600' />}
      </div>
    </Card>
  )
}
