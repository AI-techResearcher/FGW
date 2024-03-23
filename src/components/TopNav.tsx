import Selector from './chat/subcomp/selector'
import { useAtom } from 'jotai'
import { MdOutlineMenu } from 'react-icons/md'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { openSideBar } from '@/lib/context'
import { exmaList } from '@/lib/data/dummyData'

function TopNav() {
  // Use Jotai's useAtom hook to manage the state of openSideBar
  const [openSideBarValue, setOpenSideBarValue] = useAtom(openSideBar)

  // Function to toggle the sidebar
  const handleToogleSidebar = () => setOpenSideBarValue(!openSideBarValue)

  return (
    <div
      // Dynamic styling based on the state of the sidebar
      className={`border-b ${!openSideBarValue ? "pl-20" : "pl-20 sm:pl-56"} dark:border-gray-700 w-full shadow-sm top-0 left-0 fixed z-10  pr-3 sm:pr-3 py-2  bg-white dark:bg-[#0A0A0A] flex justify-between items-center`}
    >
      <div className='flex items-center gap-2 sm:gap-4 w-full'>
        {/* Sidebar toggle button */}
        <MdOutlineMenu
          className='text-2 w-6 h-auto'
          role='button'
          onClick={handleToogleSidebar}
        />
        {/* Search input */}
        {/* <div className='max-w-sm w-full flex border dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3'>
          <IoMdSearch className='text-2' />
          <input
            type='text'
            className='outline-none w-full dark:bg-gray-900'
            placeholder='Search...'
          />
        </div> */}
        {/* Selector for exam preparation */}
        <div
          className='flex w-full items-center gap-2 text-[11px] sm:text-sm text-2'
          style={{ whiteSpace: 'nowrap' }}
        >
          {/* Text indicating preparation and Selector component */}
          <span className='sm:block hidden'>Preparing for the</span>
          <div>
            <Selector
              title=''
              options={exmaList}
              onValueChange={(e) => e}
              defaultValue={exmaList[0]}
            />
          </div>{' '}
          <span className='sm:block hidden'>with FGW</span>
        </div>
      </div>
      <div className='flex gap-3 items-center w-full justify-end'>
        {/* Greeting message and link to the profile page */}
        <p className='text-base font-medium sm:block hidden'>Hello, John</p>
        <Link to='/profile'>
          <img
            src={'https://eu.ui-avatars.com/api/?name=John+Doe&size=250'}
            alt=''
            className='w-8 h-auto rounded-full'
          />
        </Link>
      </div>
    </div>
  )
}

export default TopNav
