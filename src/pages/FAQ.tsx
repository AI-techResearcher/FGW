import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

type qnas = {
  type: string
  qna: {
    question: string
    answer: string
  }
}[][]

const qnas: qnas = [
  [
    {
      type: 'General Questions',
      qna: {
        question: 'What is the purpose of the FGW Chatbots?',
        answer:
          'The FGW Chatbots are designed to assist candidates in preparing for various certification exams by providing tailored assistance and resources based on the selected exam, topic, chapter, and subchapter.',
      },
    },
    {
      type: 'General Questions',
      qna: {
        question: 'Which certification exams does the FGW Chatbots support?',
        answer:
          'The chatbots support CAIA Level 1, CAIA Level 2, CFA ESG Investing, GARP SCR, FRM Level 1 & 2 (coming soon), CFA Levels 1, 2 & 3, and CIPM Levels 1 & 2 (coming soon).',
      },
    },
    {
      type: 'General Questions',
      qna: {
        question:
          'How is the FGW Chatbot different from other educational chatbots?',
        answer:
          'FGW Chatbots are customized to the specific course content of the selected exam, ensuring precise and relevant assistance. Additionally, advanced options allow for further refinement and generation of practice questions and flashcards.',
      },
    },
  ],
  [
    {
      type: 'Subscription & Pricing',
      qna: {
        question: 'What are the subscription models available?',
        answer:
          'We offer three subscription models: FGW Chatbot ($29.99), FGW Advanced Chatbot ($39.99), and FGWPro Chatbot ($74.99).',
      },
    },
    {
      type: 'Subscription & Pricing',
      qna: {
        question: 'What are the features of the different subscription models?',
        answer:
          'Each subscription level offers different features:\n- FGW Chatbot: Basic chatbot functionality with tailored content based on selected exams.\n- FGW Advanced Chatbot: Includes features of FGW Chatbot plus the ability to select chapter and subchapters.\n- FGWPro Chatbot: All features of FGW Advanced and additional features like generating practice questions and flashcards, and integrated APIs for calculators and mathematical questions.',
      },
    },
    {
      type: 'Subscription & Pricing',
      qna: {
        question: 'Can I upgrade my subscription later?',
        answer:
          'Yes, you can upgrade your subscription at any time to gain access to additional features.',
      },
    },
    {
      type: 'Subscription & Pricing',
      qna: {
        question: 'Is there any contract or long-term commitment?',
        answer:
          'No, our subscriptions are billed monthly and can be canceled at any time.',
      },
    },
  ],
  [
    {
      type: 'Using the Chatbot',
      qna: {
        question: 'How do I select the exam I am preparing for in the chatbot?',
        answer:
          'Upon subscribing, you can choose the exam you are preparing for, and the chatbot will customize its responses based on the selected exam content.',
      },
    },
    {
      type: 'Using the Chatbot',
      qna: {
        question: 'Can I change the exam I am preparing for in the chatbot?',
        answer:
          'Yes, but please note that the content for each exam is segregated to ensure precision and relevance. You might need to adjust your subscription if the new exam is not included in your current plan.',
      },
    },
    {
      type: 'Using the Chatbot',
      qna: {
        question:
          'How does the FGWPro Chatbot generate practice questions and answers?',
        answer:
          "The FGWPro Chatbot allows you to select the number, difficulty, type, and other specifics of questions. It then generates questions and detailed answers based on your selections, adhering to the Learning Objectives outlined in each chapter of the exam's study material.",
      },
    },
  ],
  [
    {
      type: 'Technical Support',
      qna: {
        question:
          'I am facing technical issues with the chatbot. How can I get help?',
        answer:
          "Please reach out to our support team via the 'Contact Us' page on our website for any technical assistance.",
      },
    },
    {
      type: 'Technical Support',
      qna: {
        question:
          'How does the chatbot ensure that the content does not get mixed between different exams?',
        answer:
          'The content for each exam is clearly segregated and aligned with the specific Learning Objectives of the respective exam to ensure that there is no mix-up.',
      },
    },
    {
      type: 'Technical Support',
      qna: {
        question:
          'Which calculator APIs are integrated with the FGWPro Chatbot?',
        answer:
          'The FGWPro Chatbot is integrated with APIs for Hewlett Packard 12C and Texas Instruments BA II Plus for solution explanations.',
      },
    },
  ],
  [
    {
      type: 'Security & Privacy',
      qna: {
        question: 'Is my data secure with FGW Chatbots?',
        answer:
          'Yes, we prioritize your data security and use advanced measures to ensure the privacy and safety of your information.',
      },
    },
    {
      type: 'Security & Privacy',
      qna: {
        question: 'Do you share my data with any third parties?',
        answer:
          'No, we do not share your data with any unauthorized third parties. For more information, please view our Privacy Policy.',
      },
    },
  ],
  [
    {
      type: 'Other Questions',
      qna: {
        question:
          'Can I request a feature or provide feedback on the chatbots?',
        answer:
          "Yes, we welcome your feedback and suggestions. Please use the 'Contact Us' form on our website to send in your inputs.",
      },
    },
  ],
  [
    {
      type: 'Subscription & Access',
      qna: {
        question:
          'If I pay for a specific exam, will I have access to other exams as well?',
        answer:
          'No, your subscription is tailored to the specific exam you have chosen. Access is limited to the content and resources of the selected exam to ensure the precision and relevance of the assistance provided by the chatbot. If you wish to use the chatbot for a different exam, you will need to modify your subscription accordingly.',
      },
    },
  ],
  [
    {
      type: 'Payment & Refunds',
      qna: {
        question: 'What forms of payment do you accept?',
        answer: 'We accept all major credit cards and PayPal.',
      },
    },
    {
      type: 'Payment & Refunds',
      qna: {
        question: 'Is my payment information secure?',
        answer:
          'Yes, we use encrypted and secure payment gateways to process transactions.',
      },
    },
    {
      type: 'Payment & Refunds',
      qna: {
        question: 'Can I request a refund?',
        answer:
          'Yes, we have a refund policy that allows you to request a refund within a certain period after purchase.',
      },
    },
  ],
  [
    {
      type: 'Account Management',
      qna: {
        question: 'How do I change my password?',
        answer:
          "You can change your password by accessing the 'Account Settings' on our platform.",
      },
    },
    {
      type: 'Account Management',
      qna: {
        question: 'I forgot my password, what should I do?',
        answer:
          "Please use the 'Forgot Password' feature on the login page to reset your password.",
      },
    },
    {
      type: 'Account Management',
      qna: {
        question: 'How do I cancel my subscription?',
        answer:
          "You can cancel your subscription from the 'Subscription' section in your account settings.",
      },
    },
    {
      type: 'Account Management',
      qna: {
        question: 'Can I share my account with others?',
        answer: 'No, sharing accounts is against our terms of service.',
      },
    },
  ],
  [
    {
      type: 'Content & Updates',
      qna: {
        question: 'How often is the content updated?',
        answer:
          'Our content is regularly updated to reflect the latest changes in exam syllabuses and formats.',
      },
    },
    {
      type: 'Content & Updates',
      qna: {
        question:
          'Are there any sample questions and answers available for free?',
        answer:
          'Yes, we provide a limited number of sample questions for each exam for free.',
      },
    },
    {
      type: 'Content & Updates',
      qna: {
        question:
          'Is there a limit to the number of questions I can generate with the FGWPro Chatbot?',
        answer:
          'There are limits per query, but no daily or monthly limits on the total number of questions.',
      },
    },
    {
      type: 'Content & Updates',
      qna: {
        question: 'Can I access the content offline?',
        answer:
          'Currently, the service is available only with an internet connection.',
      },
    },
  ],
  [
    {
      type: 'Usage & Features',
      qna: {
        question: 'Can I use the chatbot on my mobile device?',
        answer:
          'Yes, the chatbot is accessible on various platforms including mobile devices.',
      },
    },
    {
      type: 'Usage & Features',
      qna: {
        question: 'Are there any video tutorials available?',
        answer:
          'We are working on providing video tutorials to help you navigate and utilize the chatbot more effectively.',
      },
    },
    {
      type: 'Usage & Features',
      qna: {
        question: 'Is there a community or forum for subscribers?',
        answer:
          'Not at the moment, but we are considering implementing a community forum for our users.',
      },
    },
    {
      type: 'Usage & Features',
      qna: {
        question: 'How do I report a problem with the content or a feature?',
        answer:
          "Please contact our support team via email or through the 'Contact Us' page on our website.",
      },
    },
  ],
  [
    {
      type: 'Technical Issues',
      qna: {
        question: 'The chatbot is not working, what should I do?',
        answer:
          'Try refreshing the page or check your internet connection. If the problem persists, contact our support team.',
      },
    },
    {
      type: 'Technical Issues',
      qna: {
        question:
          'I am facing issues with the API integrations, who should I contact?',
        answer:
          'Please reach out to our technical support team for assistance with API-related issues.',
      },
    },
  ],
  [
    {
      type: 'Accessibility',
      qna: {
        question: 'Is the platform accessible to people with disabilities?',
        answer:
          'We strive to make our platform accessible to everyone, including people with disabilities.',
      },
    },
    {
      type: 'Accessibility',
      qna: {
        question:
          'Can I change the font size and color theme of the chatbot interface?',
        answer:
          'Yes, you can customize the appearance from the settings option.',
      },
    },
  ],
  [
    {
      type: 'Feedback & Suggestions',
      qna: {
        question: 'Where can I leave feedback or suggestions?',
        answer:
          'Please use the feedback form available on our website to leave your comments and suggestions.',
      },
    },
    {
      type: 'Feedback & Suggestions',
      qna: {
        question: 'Do you have a roadmap for upcoming features?',
        answer:
          'We periodically release our roadmap updates on our website and through email newsletters.',
      },
    },
  ],
  [
    {
      type: 'Other Questions',
      qna: {
        question: 'Do you offer any discounts or promotions?',
        answer:
          'Yes, we occasionally offer discounts and promotions which are announced on our website and social media channels.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question: 'Do you have an affiliate program?',
        answer:
          'Yes, you can join our affiliate program and earn commissions for referring new customers.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question: 'Is there a student discount available?',
        answer:
          'We do offer student discounts with valid identification and enrollment proof.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question:
          'Do you provide certificates of completion for any training or mock exams?',
        answer:
          'Currently, we do not provide certificates, but we are working on introducing this feature.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question:
          'Can the chatbot help with exam registration and other logistics?',
        answer:
          'The chatbot primarily focuses on exam content, but it can guide you to the relevant resources for registration and logistics.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question: 'Are the exams updated for the latest versions or editions?',
        answer:
          'Yes, we ensure that the exams and content are up-to-date with the latest versions and editions.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question: 'Do you collaborate with educational institutions?',
        answer:
          'Yes, we have partnerships with various educational institutions for bulk subscriptions and collaborations.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question: 'Can I request custom features for my subscription plan?',
        answer:
          'Custom features can be discussed and arranged based on individual or institutional requirements.',
      },
    },
    {
      type: 'Other Questions',
      qna: {
        question:
          'Do you offer any personal or one-on-one tutoring or assistance?',
        answer:
          'Currently, we do not offer personal tutoring, focusing instead on automated, scalable solutions through our chatbots.',
      },
    },
  ],
  [
    {
      type: 'CAIA (Chartered Alternative Investment Analyst)',
      qna: {
        question: 'What is the CAIA certification?',
        answer:
          'The CAIA certification is a globally recognized credential for professionals managing and analyzing alternative investments.',
      },
    },
    {
      type: 'CAIA (Chartered Alternative Investment Analyst)',
      qna: {
        question: 'Why is the CAIA certification beneficial?',
        answer:
          'It enhances knowledge in alternative investments and demonstrates a commitment to professionalism, benefiting career prospects and advancement.',
      },
    },
    {
      type: 'CAIA (Chartered Alternative Investment Analyst)',
      qna: {
        question: 'What does the CAIA certification cover?',
        answer:
          'It covers a wide range of topics, including professional standards and ethics, real assets, hedge funds, private equity, structured products, and risk management.',
      },
    },
    {
      type: 'CAIA (Chartered Alternative Investment Analyst)',
      qna: {
        question: 'Who should consider the CAIA certification?',
        answer:
          'Professionals in asset management, consulting, institutional investing, and other fields of finance where alternative investments are a focus.',
      },
    },
  ],
  [
    {
      type: 'CFA (Chartered Financial Analyst)',
      qna: {
        question: 'What is the CFA certification?',
        answer:
          'The CFA certification is a prestigious global credential for investment management and financial analysis professionals.',
      },
    },
    {
      type: 'CFA (Chartered Financial Analyst)',
      qna: {
        question: 'Why is the CFA certification beneficial?',
        answer:
          'It provides extensive knowledge of investment analysis and portfolio management, enhancing credibility and career opportunities.',
      },
    },
    {
      type: 'CFA (Chartered Financial Analyst)',
      qna: {
        question: 'What does the CFA certification cover?',
        answer:
          'The CFA certification covers ethics, quantitative methods, economics, financial reporting, portfolio management, and wealth planning.',
      },
    },
    {
      type: 'CFA (Chartered Financial Analyst)',
      qna: {
        question: 'Who should consider the CFA certification?',
        answer:
          'Investment analysts, portfolio managers, financial advisors, and anyone aiming to progress in the investment management field.',
      },
    },
  ],
  [
    {
      type: 'CFA ESG Investing',
      qna: {
        question: 'What is the CFA ESG Investing certification?',
        answer:
          'This certification focuses on integrating environmental, social, and governance (ESG) factors into the investment decision-making process.',
      },
    },
    {
      type: 'CFA ESG Investing',
      qna: {
        question: 'Why is it beneficial?',
        answer:
          'It signifies expertise in ESG investing, increasing opportunities in sustainable investment roles.',
      },
    },
    {
      type: 'CFA ESG Investing',
      qna: {
        question: 'What does it cover?',
        answer:
          'It covers ESG analysis, integration, and related investment strategies.',
      },
    },
    {
      type: 'CFA ESG Investing',
      qna: {
        question: 'Who should consider this certification?',
        answer:
          'Investment professionals aiming to specialize in sustainable and responsible investing.',
      },
    },
  ],
  [
    {
      type: 'GARP SCR (Sustainability and Climate Risk)',
      qna: {
        question: 'What is the GARP SCR certification?',
        answer:
          'GARP SCR certification is for professionals managing sustainability and climate risk.',
      },
    },
    {
      type: 'GARP SCR (Sustainability and Climate Risk)',
      qna: {
        question: 'Why is it beneficial?',
        answer:
          "It demonstrates advanced knowledge in sustainability and climate risk, essential in today's global context.",
      },
    },
    {
      type: 'GARP SCR (Sustainability and Climate Risk)',
      qna: {
        question: 'What does it cover?',
        answer:
          'The certification covers risk management, sustainability, climate risk, and other related areas.',
      },
    },
    {
      type: 'GARP SCR (Sustainability and Climate Risk)',
      qna: {
        question: 'Who should consider this certification?',
        answer:
          'Risk management and sustainability professionals aiming to advance their careers in these fields.',
      },
    },
  ],
  [
    {
      type: 'FRM (Financial Risk Manager)',
      qna: {
        question: 'What is the FRM certification?',
        answer:
          'FRM is a globally recognized certification for financial risk managers.',
      },
    },
    {
      type: 'FRM (Financial Risk Manager)',
      qna: {
        question: 'Why is the FRM certification beneficial?',
        answer:
          'It showcases expertise in risk management, increasing employability and career advancement opportunities.',
      },
    },
    {
      type: 'FRM (Financial Risk Manager)',
      qna: {
        question: 'What does the FRM certification cover?',
        answer:
          'It covers the foundations of risk management, quantitative analysis, financial markets and products, and valuation and risk models.',
      },
    },
    {
      type: 'FRM (Financial Risk Manager)',
      qna: {
        question: 'Who should consider the FRM certification?',
        answer:
          'Individuals in risk management, trading, portfolio management, and other related finance roles.',
      },
    },
  ],
  [
    {
      type: 'CIPM (Certificate in Investment Performance Measurement)',
      qna: {
        question: 'What is the CIPM certification?',
        answer:
          'CIPM certification is for investment professionals involved in performance evaluation and presentation.',
      },
    },
    {
      type: 'CIPM (Certificate in Investment Performance Measurement)',
      qna: {
        question: 'Why is it beneficial?',
        answer:
          'It signifies advanced skills in investment performance measurement, enhancing career opportunities.',
      },
    },
    {
      type: 'CIPM (Certificate in Investment Performance Measurement)',
      qna: {
        question: 'What does the CIPM certification cover?',
        answer:
          'It covers performance measurement, attribution, and appraisal.',
      },
    },
    {
      type: 'CIPM (Certificate in Investment Performance Measurement)',
      qna: {
        question: 'Who should consider the CIPM certification?',
        answer:
          'Professionals in investment roles focusing on performance evaluation and analysis.',
      },
    },
  ],
]

const qnasLabel = qnas.map((e) => e[0].type)

function Faq() {
  const getQnasByLabel = (text: string) =>
    qnas.filter((e) => e[0].type === text)

  const [selectedTab, setSelectedTab] = useState(qnas[0])

  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Frequently Asked Questions (FAQ)
        </h1>
      </div>
      <div className='max-w-3xl w-full mx-auto py-14'>
        <div className='flex flex-wrap gap-3'>
          {qnasLabel.map((e, i) => {
            return (
              <Button
                key={i}
                size={'sm'}
                className={`text-left ${
                  e === selectedTab[0].type
                    ? 'bg-blue-700 hover:bg-blue-600 text-gray-200'
                    : 'bg-slate-800 text-gray-400 border border-gray-700 hover:bg-slate-900'
                }`}
                onClick={() => setSelectedTab(getQnasByLabel(e)[0])}
              >
                {e}
              </Button>
            )
          })}
        </div>

        <Accordion type='single' collapsible className='mt-6'>
          {selectedTab.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='dark:bg-slate-900 dark:border-slate-800 dark:text-gray-300'
            >
              <AccordionTrigger>{item.qna.question}</AccordionTrigger>
              <AccordionContent>{item.qna.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  )
}

export default Faq
