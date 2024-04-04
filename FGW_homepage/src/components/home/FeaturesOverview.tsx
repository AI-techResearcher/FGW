import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { BiSolidBookReader, BiTime } from 'react-icons/bi'
import { PiNewspaperClippingLight } from 'react-icons/pi'
const featureCardTexts = [
  {
    title: 'Exam-Specific Customization',
    icon: BiSolidBookReader,
    steps: [
      "Tailor your chatbot based on the exam you're preparing for.",
      'Exclusive content for each exam ensuring focused and relevant learning.',
    ],
  },
  {
    title: 'Real-Time Query Resolution',
    icon: BiTime,
    steps: [
      'Instant answers to your exam-related questions.',
      'Clear, concise, and accurate explanations enhancing your understanding.',
    ],
  },
  {
    title: 'Extensive Question Generation',
    icon: PiNewspaperClippingLight,
    steps: [
      'Generate practice questions by topics, chapters, and subchapters.',
      'Customize question types and difficulty levels.',
      'Select the percentage of questions that have calculations.',
    ],
  },
]

function FeatureCard({ data }: { data: (typeof featureCardTexts)[0] }) {
  return (
    <Card className='bg-blue-100/100 border-none text-blue-950 flex'>
      <div className='w-3/12'>
        <CardContent className='pt-6 flex justify-center'>
          <div className='bg-blue-300/50 hover:scale-105 transition-transform duration-300 px-2 py-2 rounded-2xl'>
            <data.icon className='w-16 h-16' />
          </div>
        </CardContent>
      </div>
      <div className='w-9/12'>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {data.steps.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </CardContent>
      </div>
    </Card>
  )
}
export default function FeaturesOverview() {
  return (
    <section className='bg-blue-50/100'>
      <div className='max-w-5xl mx-auto py-24 grid grid-cols-1 gap-y-6 md:grid-cols-2'>
        <div className='space-y-2 container mx-auto order-2 md:order-1'>
          {featureCardTexts.map((e, i) => (
            <FeatureCard data={e} key={i} />
          ))}
        </div>
        <article className='container mx-auto order-1 md:order-2 text-blue-950'>
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-semibold'>
            Explore the Revolutionary Features of FGW Chatbots
          </h2>
          <p className='max-w-4xl mt-6 text-sm md:text-base text-blue-950'>
            Immerse yourself in a world where learning is customized to your
            needs. From realtime query resolution to chapter-specific learning,
            explore the myriad features tailored for your success
          </p>
        </article>
      </div>
    </section>
  )
}
