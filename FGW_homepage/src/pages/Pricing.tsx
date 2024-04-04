import { HiOutlineCheck } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const commonFeatures = [
  'Strict Adherence to the Learning Objectives outlined in Exam Study Material',
  'No Mixing of Content between Different Exams',
  'Dedicated Content and Question Sets for Each Exam',
]

const notesWarn = [
  'Access is limited to the specific exam content you pay for, ensuring focused and relevant preparation without confusion.',
  'Upgrade or change your plans anytime to align with your preparation needs.',
]
const fgwPricing = [
  {
    name: 'FGW Chatbot',
    price: 29.99,
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

const pricingTableHeader = [
  'Features',
  'FGW Chatbot ($29.99/month)',
  'FGW Advanced Chatbot ($39.99/month)',
  'FGWPro Chatbot ($74.99/month)',
]

const pricingRows = [
  { text: 'Exam-Specific Customization', isContain: [true, true, true] },
  { text: 'Exclusive Content', isContain: [true, true, true] },
  { text: 'Real-Time Query Resolution', isContain: [true, true, true] },
  { text: 'Chapter and Subchapter Selection', isContain: [false, true, true] },
  { text: 'Enhanced Customization', isContain: [false, true, true] },
  { text: 'Extensive Question Generation', isContain: [false, false, true] },
  { text: 'Detailed Answer Generation', isContain: [false, false, true] },
  { text: 'Calculator Guidance', isContain: [false, false, true] },
  { text: 'Flashcard Generation', isContain: [false, false, true] },
  {
    text: 'Strict Adherence to Learning Objectives',
    isContain: [true, true, true],
  },
  { text: 'Seamless Data Segregation', isContain: [true, true, true] },
  { text: 'Not Just For Exams', isContain: [true, true, true] },
]
function PricingCard({ data }: { data: (typeof fgwPricing)[0] }) {
  return (
    <Card className='dark:bg-slate-950 dark:border-slate-800' >
    
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
          {data.features.map((e) => (
            <div className='flex gap-2'>
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
        <Button className='rounded-full' variant={'secondary'}>
          Choose This Plan
        </Button>
      </CardFooter>
    </Card>
  )
}

// function PricingTable() {
//   reutrn
// }
function CheckBox() {
  return (
    <div className='mt-1 p-0.5 text-white bg-green-500/90 rounded-full w-fit'>
      <HiOutlineCheck />
    </div>
  )
}
function CrossBox() {
  return (
    <div className='mt-1 p-0.5 text-white bg-red-600 rounded-full w-fit'>
      <RxCross2 />
    </div>
  )
}
function Pricing() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4 pricing-controller' >
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl' id='pricing-controller'>
          Pricing
        </h1>
        <p className='max-w-4xl mx-auto mt-6 text-center text-gray-400 text-sm md:text-base'>
          Elevate your exam preparation with FGW Chatbots, tailored to fit your
          needs and budget. Select from our three subscription models, each
          offering a unique level of customization and assistance for your
          certification exam preparation.
        </p>
      </div>
      <div className='max-w-5xl mx-auto'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7 gap-3'>
          {fgwPricing.map((e) => (
            <PricingCard data={e} />
          ))}
        </section>
        <section className='pt-10'>
          <Alert className='border-slate-600'>
            <AlertTitle className='text-gray-200'>Note</AlertTitle>
            <AlertDescription>
              <ul className='text-gray-300'>
                {notesWarn.map((e) => (
                  <li>- {e}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </section>
        <section className='pt-10'>
          <Table className='border border-slate-600'>
            <TableHeader>
              <TableRow className='border-slate-600'>
                {pricingTableHeader.map((text) => (
                  <TableHead className='text-center'>{text}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className='text-gray-300'>
              {pricingRows.map((e, i) => (
                <TableRow key={i} className='border-slate-600'>
                  <TableCell className='font-medium'>{e.text}</TableCell>
                  <TableCell>
                    <div className='flex justify-center w-full'>
                      {e.isContain[0] ? <CheckBox /> : <CrossBox />}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center w-full'>
                      {e.isContain[1] ? <CheckBox /> : <CrossBox />}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center w-full'>
                      {e.isContain[2] ? <CheckBox /> : <CrossBox />}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <section className='pt-14'>
          <Alert className='border-none bg-slate-900'>
            <AlertTitle className='text-gray-300'>
              Take the leap towards your certification success with FGW
              Chatbots!
            </AlertTitle>
            <AlertDescription className='mt-3 text-gray-400'>
              For any further queries, visit our
              <Button variant={'link'} asChild className='px-2 py-0'>
                <Link to='/faq'>Faq Section</Link>
              </Button>
              or
              <Button variant={'link'} asChild className='px-2 py-0'>
                <Link to='/contact'>Contact us</Link>
              </Button>{' '}
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </main>
  )
}

export default Pricing
