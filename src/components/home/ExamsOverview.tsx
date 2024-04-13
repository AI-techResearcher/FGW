import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/Card'
function ExamsOverview() {
  const examList = [
    {
      name: 'CAIA Level 1 & 2',
      desc: 'Global Recognition in Alternative Investment',
      content:
        'Elevate your professional standing with a CAIA designation, showcasing your comprehensive understanding of alternative investment strategies and commitment to ethical standards.',
    },
    {
      name: 'CFA ESG Investing',
      desc: 'Demonstrate Expertise in Sustainable Investing',
      content:
        'Enhance your profile by mastering the principles of ESG (Environmental, Social, Governance) investing, reflecting your commitment to the future of finance and sustainable investments',
    },
    {
      name: 'GARP SCR',
      desc: 'Showcase Risk Management Proficiency',
      content:
        'Solidify your position as a risk management expert, indicating a thorough understanding of the strategic, current, and emerging risks in the global business environment.',
    },
    {
      name: 'FRM Level 1 & 2',
      desc: 'Be a Leader in Financial Risk Management',
      content:
        'With FRM certification, exhibit a global standard of excellence and deep insight into risk management, enhancing career prospects in the competitive finance world.',
    },
    {
      name: 'CFA Level 1, 2 & 3',
      desc: 'Set a Gold Standard in Finance',
      content:
        'Achieve the CFA designation, one of the highest distinctions in the investment management profession, exemplifying professionalism, knowledge, and commitment to high ethical standards',
    },
    {
      name: 'CIPM Level 1 & 2',
      desc: 'Expertise in Portfolio Management',
      content:
        'With CIPM, display advanced capabilities in effective portfolio management and functional insights into risk assessment, aligning investment strategies with client objectives.',
    },
  ]
  function ExamCard({ data }: { data: (typeof examList)[0] }) {
    return (
      <Card className='w-full border-none bg-blue-100/100 shadow-none'>
        <CardHeader>
          <CardTitle className='text-blue-950'>{data.name}</CardTitle>
          <CardDescription className='text-blue-900'>
            {data.desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-blue-900'>{data.content}</p>
        </CardContent>
      </Card>
    )
  }
  return (
    <section className='bg-blue-50/100'>
      <div className='container max-w-5xl mx-auto py-24'>
        <div className='mb-10 space-y-5'>
          <h1 className='text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-950'>
            Tailored for Your Success in Various Exams
          </h1>
          <p className='max-w-4xl text-sm md:text-base text-blue-950'>
            Preparing for CAIA, CFA, CFA ESG, GARP SCR, FRM, or CIPM? Our
            chatbots are uniquely designed for each exam, ensuring you focus on
            what truly matters for your success
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {examList.map((e, i) => (
            <ExamCard data={e} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExamsOverview
