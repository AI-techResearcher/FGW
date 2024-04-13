import { NavLink, Link } from 'react-router-dom'
import { Button } from './ui/button'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Logo from '@/assets/logo-min.png'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Headroom from 'react-headroom'

function Header() {
  const menuList = [
    { title: 'Home', href: '/' },
    {
      title: 'Pricing',
      href: 'pricing',
    },
    {
      title: 'Case Study',
      href: '/case-study',
    },
    {
      title: 'Community',
      href: '/community',
    },
    {
      title: 'FAQ',
      href: '/faq',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <Headroom>
      <header className='flex justify-between px-6 py-2.5 items-center bg-slate-800 text-white'>
        <div id='logo' onClick={() => window.location.reload()}>
          <Link to='/'>
            <img src={Logo} className='w-12 h-auto' />
          </Link>
        </div>
        <div className='flex items-center'>
          <Popover>
            <PopoverTrigger asChild>
              <button className='block md:hidden'>
                <HiOutlineMenuAlt4 className='w-6 h-7' />
              </button>
            </PopoverTrigger>
            <PopoverContent className='border-none w-screen mt-2 rounded-none shadow-none'>
              <div>
                <ul className='flex gap-3 flex-col'>
                  {menuList.map((e, i) => (
                    <li key={i}>
                      <NavLink
                        to={e.href}
                        className={({ isActive }) =>
                          isActive
                            ? 'capitalize text-blue-400 hover:underline underline-offset-8'
                            : 'hover:underline text-gray-300 underline-offset-8'
                        }
                      >
                        {e.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className='flex gap-2 mt-5'>
                  <Button
                    className='rounded-full'
                    variant={'secondary'}
                    asChild
                  >
                    <Link to={'login'}>Sign In</Link>
                  </Button>
                  <Button className='rounded-full' asChild>
                    <Link to={'register'}>Get Start</Link>
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div className='hidden md:block'>
            <div>
              <ul className='flex gap-3 flex-row'>
                {menuList.map((e, i) => (
                  <li key={i}>
                    <NavLink
                      to={e.href}
                      className={({ isActive }) =>
                        isActive
                          ? 'capitalize text-blue-400 hover:underline underline-offset-8'
                          : 'hover:underline underline-offset-8'
                      }
                    >
                      {e.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='md:flex gap-2 hidden'>
          <Button className='rounded-full' variant={'ghost'} asChild>
            <Link to={'login'}>Sign In</Link>
          </Button>
          <Button className='rounded-full' asChild>
            <Link to={'register'}>Get Start</Link>
          </Button>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
