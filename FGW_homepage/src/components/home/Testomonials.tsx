import { Card, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { FaQuoteLeft } from 'react-icons/fa'

function TestomonialCard({ data }: { data: (typeof testomonialList)[0] }) {
  return (
    <Card className='bg-blue-100 border-0 shadow-none'>
      <CardHeader>
        <FaQuoteLeft className='text-blue-950' />
        <CardTitle className='text-blue-950'>{data.text}</CardTitle>
        <CardDescription className='text-base pt-5 text-gray-900'>
          - {data.name}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

const testomonialList = [
  {
    text: 'FGW Chatbots transformed my learning experience!',
    name: 'Alex R',
  },
  {
    text: 'Affordable, effective, and intuitive. Highly recommend it!',
    name: 'Priya S',
  },
]

export default function Testomonials() {
  return (
    <section className='bg-blue-50/100'>
      <div className='container max-w-5xl mx-auto py-24'>
        <article className='text-blue-950'>
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-semibold'>
            Hear From Our Satisfied Learners
          </h2>
          <p className='max-w-4xl mt-6 text-sm md:text-base'>
            Our learners are conquering their exams and advancing their careers.
            Read their stories and embark on your own journey to success.
          </p>
        </article>

        <div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-3'>
          {testomonialList.map((e, i) => (
            <TestomonialCard data={e} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
