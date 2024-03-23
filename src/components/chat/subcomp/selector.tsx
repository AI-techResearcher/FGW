import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'

// types for props Selector
interface ISelector {
  title: string
  options: (string | boolean)[]
  onValueChange: (value: string) => void
  defaultValue?: string
}


export default function Selector({
  title,
  options,
  onValueChange,
  defaultValue,
}: ISelector) {
  return (
    <Select onValueChange={onValueChange} value={defaultValue}>
      <SelectTrigger className='w-full truncate'>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent className='dark:border-gray-700'>
        {/* Conditional rendering based on the number of options */}
        {options.length < 6 ? (
          <SelectGroup>
            {/* <SelectLabel>{title}s</SelectLabel> */}

            {/* Mapping through options and rendering each as a selectable item */}
            {options.map((opt) => {
              return (
                <SelectItem value={opt as string}>
                  <span>{opt}</span>
                </SelectItem>
              )
            })}
          </SelectGroup>
        ) : (
           // If options are 6 or more, display with a scrollable area
          <ScrollArea className='h-44'>
            <SelectGroup>
              {/* <SelectLabel>{title}s</SelectLabel> */}
                 {/* Mapping through options and rendering each as a selectable item */}
              {options.map((opt) => {
                return (
                  <SelectItem value={opt as string}>
                    <span>{opt}</span>
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </ScrollArea>
        )}
      </SelectContent>
    </Select>
  )
}
