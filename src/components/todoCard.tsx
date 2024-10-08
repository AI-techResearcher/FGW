import React from 'react';
import { PiDotsThreeBold } from 'react-icons/pi';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Define the properties of each TodoCard
interface ITodoCard {
  title: string;
  desc: string;
}

// TodoCard component representing a single todo item
export function TodoCard({ title, desc }: ITodoCard) {
  return (
    <Card className='border shadow-sm'>
      <div className='p-5'>
        {/* TodoCard header: title and dropdown menu */}
        <div className='flex justify-between items-center gap-3'>
          <p className='text-xl font-[500]'>{title}</p>
          {/* DropdownMenu for additional actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* Button with PiDotsThreeBold icon for triggering the dropdown */}
              <Button variant={'ghost'} size={'icon'} className='h-auto'>
                <PiDotsThreeBold className='w-6 h-auto' />
              </Button>
            </DropdownMenuTrigger>
            {/* DropdownMenuContent with Edit and Delete options */}
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  {/* Edit option with BiPencil icon */}
                  <BiPencil className='mr-2 h-4 w-4 text-blue-700' />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* Delete option with BsFillTrash3Fill icon */}
                  <BsFillTrash3Fill className='mr-2 h-4 w-4 text-destructive' />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* TodoCard description */}
        <p className='text-sm mt-3 text-gray-600'>
          {/* Displaying a shortened version of the description if it's too long */}
          {desc.length > 100
            ? desc.split(' ').slice(0, 20).join(' ') + '...'
            : desc}
        </p>
      </div>
    </Card>
  );
}
