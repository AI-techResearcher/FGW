import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const SosialMediaIntegration = () => {
  return (
    <div>
              <p className='text-lg font-semibold'>Social Media Integration</p>

              <div className='grid grid-cols-2 gap-2 max-w-sm mt-3'>
                <div className='flex gap-2 rounded-md items-center px-2 py-3 cursor-pointer text-[12px] sm:text-sm border dark:border-gray-900'>
                  <FaFacebook className='w-8 h-auto text-gray-700' />
                  <p>Facebook</p>
                </div>
                <div className='flex gap-2 rounded-md items-center px-2 py-3 cursor-pointer text-[12px] sm:text-sm border dark:border-gray-900'>
                  <FaLinkedin className='w-8 h-auto text-gray-700' />
                  <p>Linkedin</p>
                </div>
              </div>
            </div>
  )
}

export default SosialMediaIntegration