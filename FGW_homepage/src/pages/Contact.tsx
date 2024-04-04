import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Contact Us
        </h1>
        <p className='max-w-xl mx-auto mt-5 text-sm text-gray-300'>
          Our team is happy to answer any questions. Please fill out the form
          below and we'll get back to you soon.
        </p>
      </div>
      <div className='max-w-3xl mx-auto text-gray-400/100 py-4 pt-10 gap-3'>
        <div className='space-y-3'>
          <div className='grid grid-cols-2 gap-2'>
            <Input placeholder='Enter Your First Name' />
            <Input placeholder='Enter Your Last Name' />
          </div>
          <Input placeholder='Enter Your Email' />
          <Textarea placeholder='Write your details message ...' rows={6} />
          <Button className='w-full text-white' variant={'default'}>
            Send Message
          </Button>
        </div>
        <div className='mt-5 space-y-3'>
          <Alert className='border-none bg-slate-900'>
            <AlertTitle className='text-gray-300'>
              You may have a common question. You may find it in the{' '}
              <Link className='text-primary' to={'/faq'}>
                FAQ
              </Link>
            </AlertTitle>
          </Alert>
          <Alert className='border-none bg-slate-900'>
            <AlertTitle className='text-gray-300'>
              Email us here -{' '}
              <a
                className='text-primary'
                href='mailto:support@futuregreenworld.com'
              >
                support@futuregreenworld.com
              </a>
            </AlertTitle>
          </Alert>
        </div>
      </div>
    </main>
  )
}

export default Contact
