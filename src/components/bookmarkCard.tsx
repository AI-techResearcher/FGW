import React from 'react';
import { PiDotsThreeBold } from 'react-icons/pi';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Button } from './ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Interface defining properties of BookmarkCard
interface IBookmarkCard {
  title: string;
  desc: string;
  chapter: string;
}

// BookmarkCard component representing a bookmark item
export function BookmarkCard({ title, desc, chapter }: IBookmarkCard) {
  return (
    // Card component for styling
    <Card className='border shadow-sm'>
      <div className='p-5'>
        {/* Display chapter information */}
        <p className='text-xs text-primary'>{chapter}</p>
        
        {/* BookmarkCard header: title and dropdown menu */}
        <div className='flex justify-between items-center gap-3'>
          {/* BookmarkCard title */}
          <p className='text-xl font-[500]'>{title}</p>
          
          {/* DropdownMenu for additional actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* Button with PiDotsThreeBold icon for triggering the dropdown */}
              <Button variant={'ghost'} size={'icon'} className='h-auto'>
                <PiDotsThreeBold className='w-6 h-auto' />
              </Button>
            </DropdownMenuTrigger>
            
            {/* DropdownMenuContent with Delete option */}
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  {/* Delete option with BsFillTrash3Fill icon */}
                  <BsFillTrash3Fill className='mr-2 h-4 w-4 text-destructive' />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* BookmarkCard description */}
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
