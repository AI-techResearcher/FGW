import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LuSliders } from 'react-icons/lu'
import { FaRegTrashCan } from 'react-icons/fa6'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { BsFilter } from 'react-icons/bs'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import BookmarkData from '@/lib/data/bookmark'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const data = [...BookmarkData]

// Define the columns configuration for the table
export const columns = [
  // Checkbox column for row selection
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        // Check if all page rows are selected or some are selected (indeterminate state)
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        // Handle change in checkbox state to toggle all page rows selection
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      // Checkbox for individual row selection
      <Checkbox
        checked={row.getIsSelected()}
        // Handle change in checkbox state to toggle row selection
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false, // Disable sorting for this column
    enableHiding: false, // Disable hiding for this column
  },
  // Column for bookmark details with a dialog trigger
  {
    accessorKey: 'title',
    header: 'Bookmark Details',
    cell: ({ row }) => (
      <Dialog>
        {/* Dialog trigger with the title from the row */}
        <DialogTrigger>
          <div className='capitalize'>{row.getValue('title')}</div>
        </DialogTrigger>
        {/* Dialog content with details */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bookmark</DialogTitle>
          </DialogHeader>
          {/* Scrollable area for detailed content */}
          <ScrollArea className='h-96'>
            <div className='px-2 text-2'>
              {/* Detailed content goes here */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    ),
  },
  // Column for date with sorting button
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        // Button to toggle sorting direction
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          {/* Arrow icon indicating sorting direction */}
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    // Display date in lowercase
    cell: ({ row }) => <div className='lowercase'>{row.getValue('date')}</div>,
  },
  // Column for chapter
  {
    accessorKey: 'chapter',
    header: 'Chapter',
    cell: ({ row }) => (
      // Display chapter in capitalized form
      <div className='capitalize'>{row.getValue('chapter')}</div>
    ),
  },
  // Column for actions with delete icon
  {
    id: 'actions',
    enableHiding: false, // Disable hiding for this column
    cell: ({ row }) => {
      return (
        // Delete icon as a clickable button
        <FaRegTrashCan className='cursor-pointer text-red-600' role='button' />
      )
    },
  },
];


export default function Bookmark() {
  // const { inputValues, handleInputChange } = useInputChange()
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

// Set initial states for sorting, column filters, column visibility, and row selection
const [sorting, setSorting] = useState<SortingState>([]);
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
const [rowSelection, setRowSelection] = useState({});

// Create a table instance using useReactTable hook with provided configurations
const table = useReactTable({
  data,
  columns,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnVisibilityChange: setColumnVisibility,
  onRowSelectionChange: setRowSelection,
  state: {
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
  },
})

// Determine if all rows on the current page are selected
const allRowsSelected =
  table.getIsAllRowsSelected() || table.getIsSomePageRowsSelected();

  return (
    <main className='p-3 space-y-4'>
      <article className='card'>
        <section className=''>
          <div className='w-full'>
            <div className='flex justify-between items-center py-4'>
              <div>
                {allRowsSelected && (
                  <Button variant='destructive'>
                    <FaRegTrashCan
                      className='cursor-pointer mr-3'
                      role='button'
                    />
                    Delete
                  </Button>
                )}
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={'ghost'} size={'sm'} className='flex gap-2'>
                    <LuSliders />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-60 mr-3 space-y-5'>
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
                        <SelectValue placeholder='Bookmark type' />
                      </SelectTrigger>
                      <SelectContent className='min-w-[4rem]'>
                        <SelectGroup>
                          <SelectItem value='created_first'>
                            Flashcard
                          </SelectItem>
                          <SelectItem value='created_last'>
                            Questions
                          </SelectItem>
                          <SelectItem value='created_last'>Chatbot</SelectItem>
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
                    <Button variant={'outline'}>
                      <LuSliders /> Apply filter
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className='rounded-md border dark:border-gray-700'>
              <Table className='dark:border-gray-900'>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className='dark:border-gray-700'
                    >
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            key={header.id}
                            className='dark:border-gray-700'
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        )
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                {
  // Check if there are rows in the table's row model
  table.getRowModel().rows?.length ? (
    // If there are rows, map through each row and create a TableRow component
    table.getRowModel().rows.map((row) => (
      <TableRow
        key={row.id}
        // Set class and data-state attributes based on row selection state
        className='dark:border-gray-700 sm:text-base text-[12px]'
        data-state={row.getIsSelected() && 'selected'}
      >
        {
          // Map through visible cells of the current row and create TableCell components
          row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {
                // Use flexRender function to render the content of the cell
                flexRender(cell.column.columnDef.cell, cell.getContext())
              }
            </TableCell>
          ))
        }
      </TableRow>
    ))
  ) : (
    // If there are no rows, display a TableRow with a TableCell indicating no results
    <TableRow>
      <TableCell
        colSpan={columns.length}
        className='h-24 text-center'
      >
        No results.
      </TableCell>
    </TableRow>
  )
}
                </TableBody>
              </Table>
            </div>
            <div className='flex items-center justify-end space-x-2 py-4'>
  {/* Display selected rows count and total rows count */}
  <div className='flex-1 text-sm text-muted-foreground'>
    {table.getFilteredSelectedRowModel().rows.length} of{' '}
    {table.getFilteredRowModel().rows.length}{' '}
    {/* Show "row(s) selected" only on small screens */}
    <span className='sm:block hidden'>row(s) selected.</span>
  </div>

  {/* Navigation buttons for table pagination */}
  <div className='space-x-2'>
    {/* Button for navigating to the previous page */}
    <Button
      variant='outline'
      size='sm'
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </Button>

    {/* Button for navigating to the next page */}
    <Button
      variant='outline'
      size='sm'
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </Button>
  </div>
</div>

          </div>
        </section>
      </article>
    </main>
  )
}
