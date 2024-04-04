import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Logo from '@/assets/logo-min.png'

function Footer() {
  const useCasesList = [
    { title: 'Terms of Service', href: 'terms-of-service' },
    { title: 'Cookies Policy', href: 'cookies-policy' },
    { title: 'Privacy Policy', href: 'privacy-policy' },
  ]
  const menuList = [
    {
      title: 'FAQ',
      href: '/faq',
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
      title: 'Pricing',
      href: '/pricing',
    },
  ]
  return (
    <footer className='w-full bg-slate-900 text-gray-200'>
      <article className='py-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10'>
        <div id='logo' className='flex md:justify-center'>
          <img src={Logo} className='w-24 md:w-48 h-auto' alt='' />
        </div>
        <div>
          <h3 className='text-2xl mb-3 font-semibold'>Company</h3>
          <ul>
            {menuList.map((e, i) => {
              return (
                <li className='capitalize text-gray-400' key={i}>
                  <Link to={e.href}>{e.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl mb-3 font-semibold'>Use Cases</h3>
          <ul>
            {useCasesList.map((e, i) => {
              return (
                <li className='capitalize text-gray-400' key={i}>
                  <Link to={e.href}>{e.title}</Link>
                </li>
              )
            })}
          </ul>
          <div className='flex gap-3 mt-5'>
            <a
              href='https://www.instagram.com/futuregreenworld/'
              target='_blank'
              className='hover:text-gray-50'
            >
              <AiFillInstagram className='h-6 w-6' />
            </a>
            <a
              href='https://www.linkedin.com/company/futuregreenworld/'
              target='_blank'
              className='hover:text-gray-50'
            >
              <AiFillLinkedin className='h-6 w-6' />
            </a>
            <a
              href='https://www.youtube.com/@FutureGreenWorld'
              target='_blank'
              className='hover:text-gray-50'
            >
              <AiFillYoutube className='h-6 w-6' />
            </a>
          </div>
        </div>
      </article>
      <div className='w-full text-center mt-3'>
        <p className='text-sm py-2 text-gray-400'>
          FutureGreenWorld© 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
