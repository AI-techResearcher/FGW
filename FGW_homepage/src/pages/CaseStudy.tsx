import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import imageOne from '@/assets/usecase/image-1.jpg'
import imageTwo from '@/assets/usecase/image-2.jpg'
import imageThree from '@/assets/usecase/image-3.jpg'
import imageFour from '@/assets/usecase/image-4.jpg'
import imageFive from '@/assets/usecase/image-5.jpg'
import imageSix from '@/assets/usecase/image-6.jpg'
import imageSeven from '@/assets/usecase/image-7.jpg'
import CtaImage from '@/assets/doctor-ac.svg'
import { PiScribbleLoopBold } from 'react-icons/pi'
import { RiFilePaper2Line } from 'react-icons/ri'
import { SiFuturelearn } from 'react-icons/si'
import { BsPen } from 'react-icons/bs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const scenarios = [
  {
    Profile: 'Alex - A Busy Professional Preparing for CAIA Level 1',
    img: imageOne,
    Challenge:
      'Alex has limited time to sift through textbooks for answers to specific queries.',
    Solution:
      'Using the FGW Chatbot, Alex quickly types in questions and receives concise, accurate answers, saving precious study time and improving understanding.',
  },
  {
    Profile: 'Jamie - A Detailed-Oriented Learner for CFA Level 2',
    img: imageThree,
    Challenge:
      'Jamie needs to focus on certain topics and chapters for an upcoming mock test.',
    Solution:
      'The FGW Advanced Chatbot allows Jamie to select particular topics and chapters, providing explanations, and clarifying doubts within those sections, making study sessions more productive.',
  },
  {
    Profile: 'Sam - Aiming for Excellence in FRM Level 1',
    img: imageFour,
    Challenge:
      'Sam desires extensive practice with a variety of questions, including different types and difficulties, alongside detailed answers.',
    Solution:
      'FGWPro Chatbot generates tailored question sets based on Sam’s preferences, offering detailed answers with explanations, references, and step-by-step calculator guidance. This comprehensive approach ensures Sam is thoroughly prepared for the exam.',
  },
  {
    Profile: 'Casey - A Visual Learner for GARP SCR',
    img: imageFive,
    Challenge:
      'Casey prefers visual learning and needs flashcards for efficient revision.',
    Solution:
      'The FGWPro Chatbot effortlessly generates flashcards by topics, chapters, and sub-chapters, aiding Casey in quick and effective revision.',
  },
  {
    Profile: 'Jordan - Needs Calculator Assistance for CFA Level 3',
    img: imageSix,
    Challenge:
      'Jordan is unsure about using the Texas Instruments BA II Plus for certain calculations.',
    Solution:
      'FGWPro Chatbot, integrated with calculator APIs, provides step-by-step guidance for calculator usage, ensuring Jordan is confident in solving mathematical questions in the exam.',
  },
  {
    Profile: 'Taylor - Tackling Tough Topics in CIPM Level 1',
    img: imageSeven,
    Challenge: 'Taylor is struggling with complex concepts and calculations.',
    Solution:
      'FGW Advanced Chatbot, with its refined focus, allows Taylor to deep dive into specific chapters and topics, clarifying doubts and ensuring a solid grasp on the material.',
  },
  {
    Profile: 'Riley - A Finance Professional Eager to Stay Updated',
    img: imageTwo,
    Challenge:
      'Riley, not preparing for any specific exam, wants to refresh and expand their knowledge about certain financial topics and concepts.',
    Solution:
      'FGW Chatbots serve as an invaluable resource for Riley. Even without a targeted exam, the chatbots provide detailed, concise, and accurate answers to any queries related to finance topics covered in the offered exams. It’s an excellent tool for continuous learning and staying updated in the financial field.',
  },
]
const professionalsBenifits = [
  {
    label: 'Benefit for Professionals',
    icon: PiScribbleLoopBold,
    text: 'Continuous Learning: FGW Chatbots provide a platform for uninterrupted learning, offering insights, explanations, and answers related to various financial topics and concepts, aiding professionals in staying ahead in their field.',
  },
  {
    label: 'Convenient Refresher',
    icon: RiFilePaper2Line,
    text: 'Professionals can quickly revisit and revise key concepts, ensuring their knowledge remains sharp and relevant, without the need to sift through extensive resources.',
  },
  {
    label: 'Diverse Question Set',
    icon: SiFuturelearn,
    text: 'With FGWPro Chatbot, professionals have access to a wide array of questions and detailed answers, allowing them to test and reinforce their understanding effectively.',
  },
  {
    label: 'Practical Insights',
    icon: BsPen,
    text: 'Gaining clarity on practical calculations and concepts is seamless with calculator API integration, enhancing real-world application of knowledge.',
  },
]

function CaseStudy() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Case Studies
        </h1>
        <p className='max-w-4xl mx-auto mt-6 text-center text-sm text-gray-400 md:text-base'>
          Explore real-life scenarios where FGW Chatbots can dramatically
          enhance your certification exam preparation, offering targeted,
          timely, and efficient assistance tailored to each stage of your study
          journey.
        </p>
      </div>
      <div className='max-w-5xl mx-auto space-y-6 pt-10 dark'>
        <section className='py-12 px-5 rounded-2xl bg-slate-900'>
          <h2 className='text-xl md:text-2xl text-gray-200 font-semibold'>
            Benefit for Professionals
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8'>
            {professionalsBenifits.map((e, i) => (
              <Card className='bg-gray-800 border-none shadow-none' key={i}>
                <CardContent className='pt-4'>
                  <div className='rounded-2xl bg-slate-900/60 hover:bg-slate-950 hover:scale-105 transition-transform duration-400 w-fit px-4 py-4'>
                    <e.icon className='h-8 w-8' />
                  </div>
                </CardContent>

                <CardHeader className='pt-1'>
                  <CardTitle className='text-gray-300'>{e.label}</CardTitle>
                </CardHeader>
                <CardContent className='text-gray-400 pt-0 mt-0'>
                  <p>{e.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {scenarios.map((e, i) => {
          return (
            <Alert
              key={i}
              className={`border-none bg-slate-900 gap-8 grid grid-cols-1 md:grid-cols-2 py-5 px-6`}
            >
              <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className='rounded-2xl w-full h-auto max-h-52 md:max-h-60 overflow-hidden'>
                  <img
                    src={e.img}
                    className='w-full hover:scale-105 transition-transform duration-700'
                    alt=''
                    draggable='false'
                  />
                </div>
              </div>
              <div
                className={`${
                  i % 2 === 0 ? 'md:order-2' : 'md:order-1'
                } text-gray-300`}
              >
                <div className='mb-3 text-gray-400'>
                  <span className='text-sm'>{e.Profile}</span>
                </div>
                <AlertTitle className='text-xl md:text-2xl'>
                  {e.Challenge}
                </AlertTitle>
                <AlertDescription className='mt-3'>
                  {e.Solution}
                </AlertDescription>
              </div>
            </Alert>
          )
        })}
      </div>
      <div
        className='max-w-5xl mx-auto mt-4 py-10 px-8 rounded-2xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-2'
        id='cta'
      >
        <div className='flex justify-center items-start flex-col gap-8'>
          <h2 className='text-2xl md:text-3xl max-w-lg font-semibold'>
            Embrace the Future of Exam Preparation with FGW Chatbots – Where
            Every Query Finds Its Answer.{' '}
          </h2>
          <Button asChild>
            <Link to='/register' className='text-white'>
              Start Preparing
            </Link>
          </Button>
        </div>
        <div className='hidden md:block'>
          <img src={CtaImage} className='w-full h-60' alt='' />
        </div>
      </div>
    </main>
  )
}

export default CaseStudy
