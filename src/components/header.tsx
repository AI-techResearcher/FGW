import { useAtom } from 'jotai'
import { IoIosMoon } from 'react-icons/io'
import { Switch } from '@/components/ui/switch'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { FaEarthAfrica } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import Logo from '@/assets/logo.png'
import { openSideBar } from '@/lib/context'
import useDarkMode from '@/lib/useDarkMode'
import { MdOutlineMenu } from 'react-icons/md'
import { menuList } from '@/lib/data/dummyData'


function Nav() {
  const [openSideBarValue,setOpenSideBarValue] = useAtom(openSideBar)
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <nav className='px-2 sm:px-3 pt-5 h-full w-full flex-col md:flex'>
      <div className='flex flex-col items-center gap-y-1'>
        <div className='mb-4 flex w-full justify-between'>
          
          <img src={Logo} className='w-10 h-auto' alt='logo' />
         {openSideBarValue &&  <MdOutlineMenu
          className='text-2 w-6 h-auto sm:hidden block'
          role='button'
          onClick={() => setOpenSideBarValue(!openSideBarValue)}
        />}
        </div>
        {menuList.map((singleMenu, index) => {
          return (
            <NavLink to={singleMenu.href} key={index} className='w-full'>
              {({ isActive }) => {
                return (
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={`w-full flex justify-start mb-1 gap-3 ${
                      isActive
                        ? 'bg-menuColor hover:bg-menuColor hover:opacity-90 text-white'
                        : 'text-2'
                    }`}
                  >
                    <singleMenu.icon
                      className={`text-xl ${!
                        openSideBarValue ? 'w-5' : 'w-4'
                      } grow-0 shrink-0 h-auto`}
                    />
                    {openSideBarValue && singleMenu.text}
                  </Button>
                )
              }}
            </NavLink>
          )
        })}

        {openSideBarValue && (
          <Button className='w-full space-x-4 text-2' variant={'ghost'}>
            <IoIosMoon /> <span>Dark Mode</span>{' '}
            <Switch
              id='dark-mode'
              onCheckedChange={toggleDarkMode as never}
              checked={darkMode as never}
            />
          </Button>
        )}
        {openSideBarValue && (
          <div className='w-full flex justify-center gap-3 text-2 mt-5'>
            <a target='_blank' href='https://www.instagram.com/futuregreenworld/'>
              <FaInstagram />
            </a>
            <a target='_blank' href='https://fgw.vercel.app/'>
              <FaEarthAfrica />
            </a>

            <a target='_blank' href='https://www.youtube.com/@FutureGreenWorld'>
              <FaYoutube />
            </a>

            <a target='_blank' href='https://www.linkedin.com/company/futuregreenworld/'>
              <FaLinkedin />
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Header() {
  return (
    <div
      className={`bg-white  sm:static z-50 fixed dark:bg-[#000000] h-screen border-e dark:border-gray-700 shadow-sm`}
    >
      <Nav />
    </div>
  )
}

export default Header
