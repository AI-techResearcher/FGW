import Typewriter from 'typewriter-effect'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container bg-slate-900 py-14'>
      <h2 className='capitalize text-center text-base md:text-lg text-gray-300 mb-5'>
        revolutionize your exam preparation with FGW Chatbots
      </h2>
      <h1 className='text-3xl md:text-5xl text-center text-white'>
        Your Personalized Path <br /> to Success for the{' '}
        <Typewriter
          component={'span'}
          options={{
            strings: [
              'CFA',
              'FRM',
              'CAIA',
              'CFA ESG Investing',
              'CIPM',
              'GARP SCR',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            skipAddStyles: true,
          }}
        />
      </h1>
      <h2 className='text-center text-sm mt-12 text-gray-300 '>
        Customized Learning. Instant Answers. Unmatched Affordability.
      </h2>
      <div className='flex justify-center w-full mt-6'>
        <Button className='rounded-full h-12' asChild>
          <Link to='/register'>Start Preparing</Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
