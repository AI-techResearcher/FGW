import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { PiPersonLight } from 'react-icons/pi'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdFeaturedVideo } from 'react-icons/md'
import { BsFillHexagonFill } from 'react-icons/bs'
import { AiOutlinePartition } from 'react-icons/ai'
import { PiExamThin } from 'react-icons/pi'

const whyFgwList = [
  {
    title: 'Personalized Learning Path',
    icon: PiPersonLight,
    desc: `Adapt to each user's individual learning needs
with a focus on high-stake financial certifications, ensuring a relevant, efficient, and focused preparation journey.`,
  },
  {
    title: 'Instant Clarification and Support',
    icon: AiOutlineFieldTime,
    desc: `Provide immediate, 24/7 answers to any
exam-related questions, ensuring continuous, uninterrupted, and smooth
learning, eliminating doubts and confusion promptly.`,
  },
  {
    title: 'Advanced, Specialized Features',
    icon: MdFeaturedVideo,
    desc: `Access sophisticated, tailored features like
specific topic selection, and customized practice questions and flashcards for a
deeper, more comprehensive learning experience.`,
  },
  {
    title: 'Quality Preparation Within Budget',
    icon: BsFillHexagonFill,
    desc: `Enjoy premium exam preparation tools
at an affordable price, ensuring that financial constraints do not hinder the
path to success.`,
  },
  {
    title: 'Leverage Cutting-Edge AI',
    icon: AiOutlinePartition,
    desc: `Utilize state-of-the-art AI for intuitive, detailed,
and accurate responses to diverse queries, enhancing understanding and
mastery of complex concepts.`,
  },
  {
    title: 'Beyond Exams - A Lifetime Learning Companion',
    icon: PiExamThin,
    desc: `Ensure continuous professional development with a learning companion that’s valuable beyond
exam preparation, aiding in keeping skills sharp and knowledge up-to-date in
the financial field.`,
  },
]
function WhyFgw() {
  return (
    <section className='bg-blue-50/100'>
      <div className='container max-w-5xl mx-auto py-24'>
        <div>
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-950'>
            Why FGW Chatbot ?
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8'>
          {whyFgwList.map((e, i) => (
            <Card key={i} className='bg-blue-100/100 border-none shadow-none'>
              <CardContent className='pt-4'>
                <div className='rounded-2xl bg-blue-300/30 text-gray-800 hover:scale-105 transition-transform duration-400 w-fit px-4 py-4'>
                  <e.icon className='h-8 w-8' />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className='text-blue-950'>{e.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-blue-900'>
                <p>{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyFgw
