import { FaAngleRight } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import useInputChange from '@/lib/hooks/useInput'
import { FaCheck } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { fgwPricing } from '@/lib/data/dummyData'

export default function Setting() {

  // const { inputValues, handleInputChange } = useInputChange()
  
  // Destructuring pricing data for different subscription levels
  const fgwBasic = fgwPricing[0]
  const fgwAdvance = fgwPricing[1]
  const fgwPro = fgwPricing[2]

  return (
    <main className='p-3'>
      <div className='space-y-12 card'>
        <div className='space-y-2'>
          <h2 className='text-2xl text-center font-semibold text-2'>
            Do you want to change subscription?
          </h2>
          <p className='text-center text-sm text-2'>
            On this section you can upgrade or downgrade your subscription.
          </p>
        </div>
         {/* Subscription options displayed in a flex container */}
        <div className='flex gap-5 sm:gap-3  sm:flex-row flex-col'>
           {/* Mapping through pricing data for different subscription levels */}
          {[fgwBasic, fgwPro, fgwAdvance].map((pricePoint, i) => {
            const isCurrent = i === 1
            return (
              // Individual subscription card with conditional styling for the current subscription
              <div
                className={`card border dark:border-gray-700 shadow-md ${
                  isCurrent && 'transform scale-105 sm:scale-110 z-20'
                }`}
              >
                <p
                  className={`text-xl font-semibold text-center ${
                    isCurrent ? 'text-[#3A7FE1]' : 'text-[#3BC642]'
                  }`}
                >
                  {pricePoint.name}
                </p>
                <p className='text-center text-xs text-2 mt-2'>
                  {pricePoint.perfectFor}
                </p>

                <div
                  className={`${
                    isCurrent ? 'blue-price' : 'green-price'
                  } py-2 text-xl font-semibold mt-5 -ml-4`}
                >
                  $ {pricePoint.price}
                </div>

                <ul className='mt-5 space-y-3'>
                  {/* List of subscription features */}
                  {pricePoint.features.map((feature, i) => {
                    return (
                      <li
                        key={i}
                        className='text-xs text-2 flex gap-3 items-center'
                      >
                        <div>
                          <FaCheck className='text-[#3DA488]' />
                        </div>
                        {feature}
                      </li>
                    )
                  })}
                </ul>
                    {/* Subscription actions */}
                <div className='flex justify-center mt-5'>
                   {/* Conditional rendering of cancel or get started button */}
                  {isCurrent ? (
                    <button type='button' className='text-sm px-4 py-2.5 rounded-full  border-2 border-[#3A7FE1] text-[#3A7FE1] font-bold'>
                      Cancel Subscription
                    </button>
                  ) : (
                    <button type='button' className='text-sm px-6 py-2.5 rounded-full  font-bold get_start_button flex items-center gap-3'>
                    Get Started <FaAngleRight />
                  </button>
                  )}  

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
