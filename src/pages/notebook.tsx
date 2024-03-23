import { FaPrint } from 'react-icons/fa6'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LuSliders } from 'react-icons/lu'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import NotebookCard from '@/components/notebookCard'
import dummyData from '@/lib/data/notebook'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
import useInputChange from '@/lib/hooks/useInput'

export default function Notebook() {
// Import useInputChange hook to manage form input state
const { inputValues, handleInputChange } = useInputChange()

// Extract chapter names from CAIA_LAVEL_ONE data
const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter)

// Extract topics from CAIA_LAVEL_ONE data
const topics = () => {
  const topics = CAIA_LAVEL_ONE.chapters.map((e) => {
    // Check if topics are represented as strings
    if (typeof e.topics[0] === 'string') {
      return e;
    }
    // Check if topics are represented as objects and map them
    if (typeof e.topics[0] === 'object') {
      return e.topics.map((e) => e.topics);
    }
  })
  return topics;
}

// State for managing the isSelected flag
const [isSelected, setIsSelected] = useState(true);

  return (
    <main className='p-3 w-full'>
      <div className='space-y-4 card'>
        <section className='flex justify-between w-full items-center'>
          <div className='flex items-center gap-2'>
            <Dialog>
              <DialogTrigger asChild>
                <button className='btn-primary'>+ New Note</button>
              </DialogTrigger>
              <DialogContent className='max-w-[98vw] md:max-w-[50vw] h-[90vh] '>
                <div className='space-y-5 mt-5'>
                  <div>
                    <Input
                      placeholder='Note’s Title'
                      name='title'
                      value={inputValues.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='h-full'>
                    <Textarea
                      placeholder='Note’s Content'
                      className='h-full'
                      name='content'
                      value={inputValues.content}
                      // rows={9}
                      onChange={handleInputChange as never}
                    />
                  </div>
                </div>
                <div />
                <div />
                <DialogFooter>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className='flex items-center gap-2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'secondary'}
                  size={'default'}
                  className='flex gap-2'
                >
                  <LuSliders />
                  <span className='sm:block hidden'>Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-60 mr-4 space-y-5'>
                {/* todo: addfilter */}
                <div className='space-y-2'>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Created' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='For the last three days'>
                          For the last three days
                        </SelectItem>
                        <SelectItem value='For the week'>
                          For the week
                        </SelectItem>
                        <SelectItem value='For the month'>
                          For the month
                        </SelectItem>
                        <SelectItem value='For the three month'>
                          For the three month
                        </SelectItem>
                        <SelectItem value='For all time'>
                          For all time
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Notebook type' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='created_first'>
                          Flashcard Notes
                        </SelectItem>
                        <SelectItem value='created_last'>
                          Questions Notes
                        </SelectItem>
                        <SelectItem value='created_last'>
                          Chatbot Notes
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select topics' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <ScrollArea className='h-52'>
                        <SelectGroup>
                          {topics()
                            .flat(Infinity)
                            .map((e, i) => {
                              if (!e) return null
                              return (
                                <SelectItem value={e as string} key={i}>
                                  {e as string}
                                </SelectItem>
                              )
                            })}
                        </SelectGroup>
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select chapter' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        {chapters.map((e, i) => {
                          if (!e) return null
                          return (
                            <SelectItem value={e as string} key={i}>
                              {e as string}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex justify-end'>
                  <Button variant={'outline'} className='flex items-center gap-2'>
                    <LuSliders /> Apply
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
             {/* Conditional rendering of delete and print buttons based on isSelected state */}
    {isSelected && (
  // Delete button with FaRegTrashCan icon and text
  <Button variant='destructive'>
    <FaRegTrashCan className='cursor-pointer mr-0 sm:mr-3' role='button' />
    <span className='sm:block hidden'>Delete</span>
  </Button>
)}
{isSelected && (
  // Print button with FaPrint icon and text
  <button className='px-3 py-2.5 sm:py-2 h-fit text-sm rounded-md bg-[#3DA488] text-white flex gap-2 items-center justify-center'>
    <FaPrint />
    <span className='sm:block hidden'>Print</span>
  </button>
)}

</div>
</section>
{/* Section containing NotebookCard components */}
<section className='flex flex-wrap sm:grid grid-cols-2 gap-3'>
  {[
    ...dummyData, // Dummy data is repeated for demonstration
    ...dummyData,
    ...dummyData,
    ...dummyData,
    ...dummyData,
    ...dummyData,
  ].map((e, i) => {
    return (
      // Render NotebookCard component with dummy data and onChange callback
      <NotebookCard
        key={i}
        {...e}
        onChange={() => setIsSelected(!isSelected)}
      />
    )
  })}
</section>

      </div>
    </main>
  )
}
