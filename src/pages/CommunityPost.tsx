// import { useParams } from 'react-router'
import { AiFillHeart } from 'react-icons/ai'
import { HiReply } from 'react-icons/hi'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Share from '@/components/community/Share'

function CommunityPost() {
  // const { id } = useParams()
  return (
    <main className='bg-slate-900 text-gray-300'>
      <div className='pb-20 pt-12 max-w-6xl mx-auto px-4'>
        {/* post box */}
        <div className='p-4 rounded-xl bg-slate-800'>
          <div className='flex gap-3 items-center mb-3'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center bg-gray-600'>
              <span>S</span>
            </div>
            <div>
              <p className='text-lg font-medium'>wasimul sami</p>
              <p className='text-sm text-gray-400'>label 2 CFA</p>
            </div>
          </div>
          {/* title  */}
          <h1 className='text-xl font-semibold mb-5 md:text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, quos error.{' '}
          </h1>
          {/* desc  */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            neque impedit quam doloribus deleniti, quisquam perspiciatis aliquam
            consectetur fugiat adipisci eaque ut ea! Non repellat inventore id
            iure ab nam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non dolores inventore et delectus dignissimos magnam
            recusandae possimus iure error ullam aspernatur tempore eos,
            veritatis, consequatur expedita hic maiores iusto dolorem.
          </p>
          <div className='mt-4 flex gap-4 items-center'>
            <button>
              <AiFillHeart className='w-6 h-auto hover:scale-95' />
            </button>
            <Share />
            <a href='#reply'>
              <HiReply className='w-6 h-auto hover:scale-95' />
            </a>
            <p className='text-gray-400 text-sm'>4 - replies</p>
          </div>
        </div>
        {/* replies */}
        <div className='ml-12 md:ml-24 mt-4 space-y-3'>
          {Array(4)
            .fill('_')
            .map((_, i) => {
              return (
                <div key={i} className='p-3 rounded-xl bg-slate-800'>
                  <div className='flex gap-3 items-center mb-3'>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-gray-600'>
                      <span>S</span>
                    </div>
                    <div>
                      <p className='text-lg font-medium'>wasimul sami</p>
                      <p className='text-sm text-gray-400'>label 2 CFA</p>
                    </div>
                  </div>
                  {/* desc  */}
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Omnis neque impedit quam doloribus deleniti, quisquam
                    perspiciatis aliquam.
                  </p>
                  <div className='mt-4 flex gap-4 items-center justify-end'>
                    <button>
                      <AiFillHeart className='w-6 h-auto hover:scale-95' />
                    </button>
                    <Share />
                    <a href='#reply'>
                      <HiReply className='w-6 h-auto hover:scale-95' />
                    </a>
                    <p className='text-gray-400 text-sm'>4 - replies</p>
                  </div>
                </div>
              )
            })}
        </div>
        {/* make reply */}
        <div className='mt-4' id='reply'>
          <Textarea className='bg-slate-800 border-gray-600' />
          <div className='flex justify-end mt-3'>
            <Button>Reply</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CommunityPost
