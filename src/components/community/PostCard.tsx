import { Link } from 'react-router-dom'

function RandomBadge() {
  const bgList = ['bg-red-600', 'bg-orange-600', 'bg-green-500', 'bg-blue-400']

  const randomItem = bgList[Math.floor(Math.random() * bgList.length)]
  return <div className={`w-2 h-2 ${randomItem}`}></div>
}
function PostCard({
  title,
  time,
  label,
  replies,
}: {
  title: string
  time: string
  label: string
  replies: number
}) {
  return (
    <Link to='/community/655445'>
      <div>
        <div className='bg-slate-900 px-2 md:px-6 py-3 rounded-lg text-gray-300 md:grid grid-cols-12 w-full group'>
          {/* title */}
          <div className='w-full col-span-8'>
            <h3 className='text-base md:text-lg group-hover:underline decoration-gray-400 underline-offset-4'>
              {title}
            </h3>
            <div className='flex mt-1 gap-3 items-center'>
              <RandomBadge /> <span>{label}</span>
            </div>
          </div>
          {/* replies */}
          <div className='text-sm text-gray-300/60 w-full flex md:flex-col flex-row gap-1 md:items-end col-span-2'>
            <p>replies</p>
            <span className='md:hidden block'>-</span>
            <p>{replies}</p>
          </div>
          {/* time */}
          <div className='text-sm text-gray-300/60 w-full flex md:flex-col flex-row gap-1 md:items-end col-span-2'>
            <p>posted</p>
            <span className='md:hidden block'>-</span>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
