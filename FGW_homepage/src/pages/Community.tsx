import PostCard from '@/components/community/PostCard'
import FilterComp from '@/components/community/Filter'
import SearchComp from '@/components/community/Search.tsx'

const dummyData = [
  {
    label: 'Latest',
    title: 'Sample Latest Topic Sample Latest Topic 1',
    replies: 8,
    lastActivity: "Oct '23",
  },
  {
    label: 'Latest',
    title: 'Sample Latest Topic 2',
    replies: 15,
    lastActivity: "Oct '23",
  },
  {
    label: 'Latest',
    title: 'Sample Latest Topic 3',
    replies: 3,
    lastActivity: "Oct '23",
  },
  {
    label: 'Latest',
    title: 'Sample Latest Topic 4',
    replies: 20,
    lastActivity: "Oct '23",
  },
  {
    label: 'Latest',
    title: 'Sample Latest Topic 5',
    replies: 12,
    lastActivity: "Oct '23",
  },
  // ... (repeat for other "Latest" topics)

  {
    label: 'Top',
    title: 'Sample Top Topic 1',
    replies: 5,
    lastActivity: "Oct '23",
  },
  {
    label: 'Top',
    title: 'Sample Top Topic 2',
    replies: 18,
    lastActivity: "Oct '23",
  },
  {
    label: 'Top',
    title: 'Sample Top Topic 3',
    replies: 7,
    lastActivity: "Oct '23",
  },
  {
    label: 'Top',
    title: 'Sample Top Topic 4',
    replies: 10,
    lastActivity: "Oct '23",
  },
  {
    label: 'Top',
    title: 'Sample Top Topic 5',
    replies: 25,
    lastActivity: "Oct '23",
  },
  // ... (repeat for other "Top" topics)

  {
    label: 'Topic',
    title: 'Sample Topic 1',
    replies: 13,
    lastActivity: "Oct '23",
  },
  {
    label: 'Topic',
    title: 'Sample Topic 2',
    replies: 6,
    lastActivity: "Oct '23",
  },
  {
    label: 'Topic',
    title: 'Sample Topic 3',
    replies: 22,
    lastActivity: "Oct '23",
  },
  {
    label: 'Topic',
    title: 'Sample Topic 4',
    replies: 9,
    lastActivity: "Oct '23",
  },
  {
    label: 'Topic',
    title: 'Sample Topic 5',
    replies: 14,
    lastActivity: "Oct '23",
  },
  // ... (repeat for other "Topic" topics)
]

// Use this dummyData array in your application as needed

function Badge({ text }: { text: string }) {
  return (
    <button className='px-3 py-2 bg-slate-800 text-gray-300 text-sm md:text-xs rounded-xl'>
      {text}
    </button>
  )
}

const tagList = [
  'Ethics',
  'Quant',
  'Economics',
  'FRA',
  'Corporate Finance',
  'Equities',
  'Fixed Income',
  'Derivatives',
  'Alternative Investments',
  'Portfolio Management',
]

function Community() {
  return (
    <main className='bg-slate-950 dark pt-14 pb-14 px-4'>
      <div className='max-w-6xl mx-auto w-full'>
        {/* filter */}
        <div className='flex gap-3 flex-wrap items-center my-6'>
          <FilterComp />
          <SearchComp />
        </div>
        {/* tags */}
        <div className='flex gap-2 flex-wrap mb-5'>
          {tagList.map((e, i) => (
            <Badge text={e} key={i} />
          ))}
        </div>
        <div id='postList' className='flex flex-col gap-y-3'>
          {dummyData.map((e) => (
            <PostCard
              title={e.title}
              label={e.label}
              time={e.lastActivity}
              replies={e.replies}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Community
