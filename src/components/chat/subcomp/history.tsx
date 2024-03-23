import { MdHistory } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
// import { ScrollArea } from '@/components/ui/scroll-area'
import { Trash2 } from 'lucide-react'
import { useAtom } from 'jotai'
import { MdOutlineMenu } from 'react-icons/md'
import { openHistory } from '@/lib/context'
import { dummyHistory } from '@/lib/data/dummyData'

interface HistoryProps {
  isDouble?: boolean;
  chatBoxHistory: any[]; // Adjust the type as per your actual data structure
}

export default function History({ isDouble, chatBoxHistory }: HistoryProps) {
// Extracting state and functions from the context using useAtom hook
const [openHistoryValue, setOpenHistory] = useAtom(openHistory);
console.log(chatBoxHistory , "test")

// Mapping the chapters from CAIA_LAVEL_ONE data
const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter);

// Generating topics function based on the structure of CAIA_LAVEL_ONE data
const topics = () => {
  const topics = CAIA_LAVEL_ONE.chapters.map((e) => {
    if (typeof e.topics[0] === 'string') {
      return e;
    }
    if (typeof e.topics[0] === 'object') {
      return e.topics.map((e) => e.topics);
    }
  });
  return topics;
}
// Returning JSX based on the condition if isDouble is true
if (isDouble) {
  return (
    <main className='bg-white dark:bg-gray-800 w-full rounded-xl px-2 mt-2'>
      {/* Button to toggle the history section */}
      <div className='flex justify-end py-2 px-1'>
        <MdHistory
          className='text-2 w-5 h-auto'
          role='button'
          onClick={() => setOpenHistory(!openHistoryValue)}
        />
      </div>
      {/* Rendering history section if openHistoryValue is true */}
      {openHistoryValue && (
        <section className='card h-full grid grid-rows-2 max-h-[80vh] overflow-hidden gap-4'>
          {/* Topics history section */}
          <div className=' w-full rounded-xl'>
            <p className='text-base ml-3 text-2 font-semibold mb-1'>Topics</p>
            <Command className='bg-light-green/40 dark:bg-transparent rounded-none p-0'>
              <CommandList className='max-h-min pt-2 p-0'>
                {/* Mapping and rendering topics */}
                {topics()
                  .flat(Infinity)
                  .slice(1, 10)
                  .map((topicItem, i) => {
                    return (
                      <CommandItem
                        className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488]  mb-1 mx-3 flex justify-between group'
                        key={i}
                      >
                        {topicItem as string}
                        <Button
                          
                          variant={'ghost'}
                          className='w-fit h-fit hover:bg-transparent block '
                        >
                          <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-500' />
                        </Button>
                      </CommandItem>
                    )
                  })}
              </CommandList>
            </Command>
          </div>
          {/* Chapters history section */}
          <div className='w-full rounded-xl py-4 z-20'>
            <p className='text-base ml-3 text-2 font-semibold mb-1'>Chapters</p>
            <Command className='bg-light-green/40 dark:bg-transparent rounded-none p-0'>
              <CommandList className='max-h-min pt-2'>
                {/* Mapping and rendering chapters */}
                {chapters.map((topicItem, i) => {
                  return (
                    <CommandItem
                      className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488] mb-1 mx-3 flex justify-between group'
                      key={i}
                    >
                      {topicItem as string}
                      <Button
                        variant={'ghost'}
                        className='w-fit h-fit hover:bg-transparent block'
                      >
                        <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-500' />
                      </Button>
                    </CommandItem>
                  )
                })}
              </CommandList>
            </Command>
          </div>
        </section>
      )}
    </main>
  )
}


  return (
    <main className='bg-white dark:bg-gray-800 w-full rounded-xl px-2 mt-2'>
    {/* Button to toggle the history section */}
    <div className='flex justify-end py-2 px-1'>
      <MdOutlineMenu
        className='text-2 w-5 h-auto'
        role='button'
        onClick={() => setOpenHistory(!openHistoryValue)}
      />
    </div>
  
    {/* Rendering history section if openHistoryValue is true */}
    {openHistoryValue && (
      <Command className='card rounded-none p-0'>
        {/* List to display command history */}
        <CommandList className='max-h-min p-0'>
          {/* Message displayed when no results are found */}
          <CommandEmpty>No results found.</CommandEmpty>
  
          {/* Grouping history items based on days */}
          <CommandGroup heading='History' className='p-0'>
            {dummyHistory.map((historyGroup, i) => {
              return (
                <CommandGroup
                  heading={historyGroup.name}
                  key={i}
                  className='p-0'
                >
                   {/* Check if chatBoxHistory is an array before mapping */}
                {Array.isArray(chatBoxHistory) && chatBoxHistory.map((historyItem, j) => (
                  <CommandItem
                    className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488] mb-1 mx-1 flex justify-between group'
                    key={j}
                  >
                    {/* Accessing the result property of each historyItem */}
                    {historyItem.result}
                    <Button
                      variant={'ghost'}
                      className='w-fit h-fit hover:bg-transparent block'
                      // onClick={() => deleteHistoryItem(historyItem)} // You can add delete functionality here
                    >
                      <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-400' />
                    </Button>
                  </CommandItem>
                ))}
                </CommandGroup>
              )
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    )}
  </main>
  
  )
}
