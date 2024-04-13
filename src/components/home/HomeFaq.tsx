import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function HomeFaq() {
  const homeFaqs = [
    {
      question: `What is the purpose of the FGW Chatbots?`,
      answer: `The FGW Chatbots are designed to assist candidates in preparing for
various certification exams by providing tailored assistance and
resources based on the selected exam, topic, chapter, and subchapter.`,
    },
    {
      question: `Which certification exams does the FGW Chatbots support?`,
      answer: `The chatbots support CAIA Level 1, CAIA Level 2, CFA ESG Investing,
GARP SCR, FRM Level 1 & 2 (coming soon), CFA Levels 1, 2 & 3, and
CIPM Levels 1 & 2 (coming soon)`,
    },
    {
      question: `How is the FGW Chatbot different from other educational chatbots?
`,
      answer: `FGW Chatbots are customized to the specific course content of the
selected exam, ensuring precise and relevant assistance. Additionally,
advanced options allow for further refinement and generation of
practice questions and flashcards.
`,
    },
    {
      question: 'How do I select the exam I am preparing for in the chatbot?',
      answer: `Upon subscribing, you can choose the exam you are preparing for, and
the chatbot will customize its responses based on the selected exam
content.`,
    },
    {
      question: `Can I change the exam I am preparing for in the chatbot?`,
      answer: `No, please note that the content for each exam is segregated to ensure
precision and relevance. You might need to adjust your subscription if
the new exam is not included in your current plan.`,
    },
    {
      question: `How does the FGWPro Chatbot generate practice questions and answers?
`,
      answer: `The FGWPro Chatbot allows you to select the number, difficulty, type,
and other specifics of questions. It then generates questions and
detailed answers based on your selections, adhering to the Learning
Objectives outlined in each chapter of the exam's study material.
`,
    },
    {
      question: `How often is the content updated?
`,
      answer: ` Our content is regularly updated to reflect the latest changes in exam
syllabuses and formats.`,
    },
    {
      question: `Is there a limit to the number of questions I can generate with the
FGWPro Chatbot?`,
      answer: `There are limits per query, but no daily or monthly limits on the total number
of questions.`,
    },
  ]
  return (
    <div className='text-black dark'>
      <div className='bg-slate-50 dark:bg-slate-950 py-24'>
        <article className='container max-w-6xl mx-auto dark:text-gray-100'>
          <h2 className='text-3xl md:text-4xl lg:text-4xl text-center font-semibold'>
            Got Questions? We{`’`} ve Got Answers!
          </h2>
          <p className='max-w-4xl mx-auto mt-6 text-center text-sm md:text-base'>
            Explore our comprehensive FAQ section to get insights into our
            offerings, understand how our chatbots work, and see how we stand
            apart in enhancing your learning journey
          </p>
        </article>
        <div className='mt-16 px-4'>
          <Accordion
            type='single'
            collapsible
            className='max-w-3xl w-full mx-auto'
          >
            {homeFaqs.map((e, i) => {
              return (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className='dark:bg-slate-900 dark:border-slate-800 dark:text-gray-100'
                >
                  <AccordionTrigger>{e.question}</AccordionTrigger>
                  <AccordionContent>{e.answer}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default HomeFaq
