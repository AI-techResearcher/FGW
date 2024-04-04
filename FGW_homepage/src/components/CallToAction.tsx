import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import CtaImage from '@/assets/doctor-ac.svg'
function CallToAction() {
  return (
    <div className='mx-auto container px-2 py-10 max-w-6xl'>
      <div
        className='py-10 px-8 rounded-2xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-2'
        id='cta'
      >
        <div className='flex justify-center items-start flex-col gap-8'>
          <h2 className='text-2xl md:text-3xl max-w-lg font-semibold'>
            Don{'’'}t Wait, Embark on Your Journey to Success with FGW Chatbots
            Now!
          </h2>
          <Button asChild>
            <Link to='/register'>Start Preparing</Link>
          </Button>
        </div>
        <div className='hidden md:block'>
          <img
            src={CtaImage}
            draggable='false'
            className='w-full h-60'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
