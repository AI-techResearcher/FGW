import { HiOutlineCheck } from 'react-icons/hi'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card'
import { Button } from '../ui/button'

function HomePricing() {
  const commonFeatures = [
    'Strict Adherence to the Learning Objectives outlined in Exam Study Material',
    'No Mixing of Content between Different Exams',
    'Dedicated Content and Question Sets for Each Exam',
  ]

  // const notesWarn = [
  //   'Access is limited to the specific exam content you pay for, ensuring focused and relevant preparation without confusion.',
  //   'Upgrade or change your plans anytime to align with your preparation needs.',
  // ]
  const fgwPricing = [
    {
      name: 'FGW Chatbot',
      price: 29.99,
      redirect_url: "/chat",
      perfectFor: [
        'Candidates looking for specific exam content guidance and clarification.',
      ],
      features: [
        ...commonFeatures,
        'Customized Chatbot for Selected Exam',
        ' Ask Questions and Seek Explanations about Exam Content',
      ],
    },
    {
      name: 'FGWPro Chatbot',
      price: 74.99,
      redirect_url: "/chat/pro",
      perfectFor: [
        'Serious candidates aiming for comprehensive preparation and practice.',
      ],
      features: [
        // ...commonFeatures,
        'All Features of FGW Advanced Chatbot',
        'Generate Practice Questions by Topics, Chapters, Sub-chapters',
        'Select Number, Difficulty, and Type of Questions',
        'Generate Flashcards by Topics, Chapters, and Sub-chapters',
        'Detailed Answers with Explanations, References, and Calculator Steps',
        'Integrations with Mathpix API, Hewlett Packard 12C API, and Texas Instruments BA II Plus API',
      ],
    },
    {
      name: 'FGW Advanced Chatbot',
      price: 39.99,
      redirect_url: "/chat/advance",
      perfectFor: [
        'Candidates who desire an in-depth and refined focus on topics, chapters, or sub-chapters within their selected exam content.',
      ],
      features: [
        // ...commonFeatures,
        'All Features of FGW Chatbot',
        'Refine Search by Topic, Chapters, or Sub-chapters',
        'More Specific Answers to Your Queries',
      ],
    },
  ]

  function PricingCard({ data }: { data: (typeof fgwPricing)[0] }) {
    return (
      <Card className='dark:bg-slate-950 dark:border-slate-800'>
        <CardHeader>
          <div className='mb-4'>
            <span className='text-sm rounded-full px-4 bg-blue-200/70 dark:bg-slate-800 text-gray-500 dark:text-slate-200 font-semibold'>
              {data.name}
            </span>
          </div>
          <CardTitle className='text-gray-300'>
            {data.price} $ <span className='text-sm font-medium'>/month</span>
          </CardTitle>
          <CardDescription>{data.perfectFor[0]}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {data.features.map((e, i) => (
              <div className='flex gap-2' key={i}>
                <div>
                  <div className='mt-1 p-0.5 text-white bg-green-500/90 rounded-full'>
                    <HiOutlineCheck />
                  </div>
                </div>
                <p className='text-gray-300'>{e}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => {window.open("http://localhost:3001"+data.redirect_url)}} className='rounded-full' variant={'secondary'}>
            Choose This Plan
          </Button>
        </CardFooter>
      </Card>
    )
  }
  return (
    <div className='py-24 bg-slate-950 dark' id='pricing-controller'>
      <div className='container max-w-6xl mx-auto'>
        <article className='container max-w-6xl mx-auto text-gray-200'>
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-semibold'>
            Pricing
          </h2>
          <p className='max-w-4xl mt-6 text-sm md:text-base'>
            Elevate your exam preparation with FGW Chatbots, tailored to fit
            your needs and budget. Select from our three subscription models,
            each offering a unique level of customization and assistance for
            your certification exam preparation.
          </p>
        </article>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7 gap-3'>
          {fgwPricing.map((e, i) => (
            <PricingCard data={e} key={i} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePricing
