import React from 'react'
import Selector from '../chat/subcomp/selector'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { exmaList } from '@/lib/data/dummyData'
import { ScrollArea } from '../ui/scroll-area'

const HelpAndSupport = () => {
  return (
    <ScrollArea className='h-[30rem] w-full'>
    <div>
      <div className='space-y-4'>
        <p className='text-lg font-semibold'>Help Center Access</p>
      </div>
      <div className='space-y-3 mt-3 max-w-2xl w-full'>
        <Selector
          title='Exam you are preparing for'
          options={exmaList}
          onValueChange={(e) => e}
        />
        <Input placeholder='Subject' />
        <Textarea placeholder='Description' rows={9} />
        <div className='flex justify-end mt-8'>
          <button className='btn-primary'>Submit</button>
        </div>

        <div className='mt-2'>
          You may have a common question. You may find it in the{' '}
          <a
            href='https://fgw.vercel.app/faq'
            className='text-blue-500'
            target='_blank'
            rel='noopener noreferrer'
          >
            FAQ
          </a>
          {/* <Accordion type='single' collapsible className='w-full '>
            {homeFaqs.map((e, i) => {
              return (
                <AccordionItem
                  value={`item` + i}
                  key={i}
                  className='dark:border-gray-700'
                >
                  <AccordionTrigger className='text-left'>
                    {e.question}
                  </AccordionTrigger>
                  <AccordionContent>{e.answer}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion> */}
        </div>
      </div>
    </div>
  </ScrollArea>
  )
}

export default HelpAndSupport