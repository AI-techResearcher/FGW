import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { BsClipboardCheck } from 'react-icons/bs'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaRegBookmark } from 'react-icons/fa6'
import { LuUserCircle } from 'react-icons/lu'
import { CiSettings } from 'react-icons/ci'
import { HiOutlineClipboard } from 'react-icons/hi2'
import TodoDatas from './todos'


export const dummyHistory = [
  {
    name: 'Today',
    items: [
      {
        title: 'Chat History 1',
      },
      {
        title: 'Chat History 2',
      },
      {
        title: 'Chat History 3',
      },
    ],
  },
  {
    name: 'Yesterday',
    items: [
      {
        title: 'Chat History 4',
      },
      {
        title: 'Chat History 5',
      },
      {
        title: 'Chat History 6',
      },
    ],
  },
  {
    name: 'Previous 7 Days',
    items: [
      {
        title: 'Chat History 7',
      },
      {
        title: 'Chat History 8',
      },
    ],
  },
]

export const dataS = [
  '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla aliquid facilis labore voluptatem corrupti ratione iste. Perspiciatis dolorum incidunt inventore, voluptas architecto illum, non consequatur, iste suscipit rem excepturi.',
  '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla aliquid facilis labore voluptatem corrupti ratione iste. Perspiciatis dolorum incidunt inventore, voluptas architecto illum, non consequatur, iste suscipit rem excepturi.',
]
export const dummyBookmark = [
  { name: 'Bookmark Note 03', date: '2023/06/15', prioriy: 'High' },
  { name: 'Bookmark Note 04', date: '2023/06/15', prioriy: 'Low' },
  { name: 'Bookmark Note 012', date: '2023/06/15', prioriy: 'High' },
  { name: 'Bookmark Note 017', date: '2023/06/15', prioriy: 'Average' },
  { name: 'Bookmark Note 06', date: '2023/06/15', prioriy: 'Average' },
]
export const dummyChatHistory = [
  { name: 'Chat History 01', date: '2023/06/15', prioriy: 'High' },
  { name: 'Chat History 02', date: '2023/06/15', prioriy: 'Low' },
  { name: 'Chat History 03', date: '2023/06/15', prioriy: 'High' },
  { name: 'Chat History 04', date: '2023/06/15', prioriy: 'Average' },
  { name: 'Chat History 05', date: '2023/06/15', prioriy: 'Average' },
]

const commonFeatures = [
  'Strict Adherence to the Learning Objectives outlined in Exam Study Material',
  'No Mixing of Content between Different Exams',
  'Dedicated Content and Question Sets for Each Exam',
]

export const fgwPricing = [
  {
    name: 'BASIC',
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
    name: 'PRO',
    price: 74.99,
    perfectFor: [
      'Serious candidates aiming for comprehensive preparation and practice.',
    ],
    features: [
      ...commonFeatures,
      'All Features of FGW Advanced Chatbot',
      'Generate Practice Questions by Topics, Chapters, Sub-chapters',
      'Select Number, Difficulty, and Type of Questions',
      'Generate Flashcards by Topics, Chapters, and Sub-chapters',
      'Detailed Answers with Explanations, References, and Calculator Steps',
      'Integrations with Mathpix API, Hewlett Packard 12C API, and Texas Instruments BA II Plus API',
    ],
  },
  {
    name: 'ADVANCED',
    price: 39.99,
    perfectFor: [
      'Candidates who desire an in-depth and refined focus on topics, chapters, or sub-chapters within their selected exam content.',
    ],
    features: [
      ...commonFeatures,
      'All Features of FGW Chatbot',
      'Refine Search by Topic, Chapters, or Sub-chapters',
      'More Specific Answers to Your Queries',
    ],
  },
]

export const board = {
  columns: [
    {
      id: 1,
      title: 'New',
      cards: [...TodoDatas.slice(0, 3)],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [...TodoDatas.slice(3, 7)],
    },
    {
      id: 3,
      title: 'Done',
      cards: [...TodoDatas.slice(7, Infinity)],
    },
  ],
}

export const optionsWeek = {
  series: [
    {
      name: 'Hour',
      data: [2, 4, 3, 3, 4, 2, 1.4],
    },
  ],
  colors: ['#16a34a'],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    row: {
      // colors: ['#fcfcfc', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
}
export const optionsMonth = {
  colors: ['#0E71FF90'],
  series: [
    {
      name: 'Month',
      data: [20, 25, 30, 35, 40, 45, 50, 50, 45, 40, 35, 30],
    },
  ],
  chart: {
    height: '100px', // Adjust the height here
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    row: {
      // colors: ['#fcfcfc', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      // borderRadiusApplication: 'end',
      // borderRadiusWhenStacked: 'last',
      columnWidth: '40%',
      hover: {
        color: '#FF0000',
      },
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
}

export const exmaList = [
  'CFA Level 1',
  'CFA Level 2',
  'CFA Level 3',

  'CAIA Level 1',
  'CAIA Level 2',

  'FRM Level 1',
  'FRM Level 2',

  'CIPM Level 1',
  'CIPM Level 2',

  'CFA ESG Investing',

  'GARP SCR',
]
export const menuList = [
  {
    text: 'Dashboard',
    href: '/dashboard',
    icon: LuLayoutDashboard,
  },
  { text: 'Chat', href: '/chat', icon: HiOutlineChatBubbleBottomCenterText },
  { text: 'Calender', href: '/calender', icon: BsCalendarEvent },
  { text: 'Bookmarks', href: '/bookmarks', icon: FaRegBookmark },
  { text: 'To Do List', href: '/todos', icon: BsClipboardCheck },
  { text: 'Notes', href: '/notes', icon: HiOutlineClipboard },
  { text: 'Profile', href: '/profile', icon: LuUserCircle },
  { text: 'Settings', href: '/settings', icon: CiSettings },
]
export const homeFaqs = [
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
  export const examLists = [
    'CAIA Level 1',
    'CAIA Level 2',
    'CFA Level 1',
    'CFA Level 2',
    'CFA Level 3',
    'CFA ESG Investing',
    'GARP SCR',
    'FRM Level 1',
    'FRM level 2',
    'CIPM Level 1',
    'CIPM Level 2',
  ]

  export const professionalFields = [
    'Information Technology',
    'Healthcare',
    'Finance/Banking',
    'Education',
    'Marketing/Advertising',
    'Legal',
    'Engineering',
    'Arts and Design',
    'Other',
  ]

  export const studentType = [
    'Computer Science & IT',
    'Medicine & Health Sciences',
    'Business & Economics',
    'Arts & Humanities',
    'Social Sciences',
    'Engineering & Technology',
    'Natural Sciences',
    'Law & Legal Studies',
    'Others',
  ]
  export const currentLevelOfEducation = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Doctorate/Ph.D.',
    'Other',
  ]