import { useRef, useEffect, useState } from 'react'
import ChatLayout from '@/layout/ChatLayout'
import Chatbox from './subcomp/chatbox'
import Selector from './subcomp/selector'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
export default function Advance() {
    // Reference to the chat area div for scrolling to bottom
    const chatAreaRef = useRef<HTMLDivElement | null>(null)

    const storedChatBoxHistory =
    JSON.parse(localStorage.getItem("chatBoxHistory")) ?? [];
  const [chatBoxHistory, setChatBoxHistory] = useState(storedChatBoxHistory);

  const updateChatBoxHistory = () => {
    setChatBoxHistory((prevChatBoxHistory) => {
      const localStorageData = JSON.parse(
        localStorage.getItem("chatBoxHistory")
      );
      // Check if data has changed before updating the state
      if (
        JSON.stringify(prevChatBoxHistory) !== JSON.stringify(localStorageData)
      ) {
        console.log("Okay Great");
        return localStorageData;
      }
      return prevChatBoxHistory;
    });
  };

  useEffect(() => {
    // Listen for the custom event and update chatBoxHistory when it occurs
    window.addEventListener("chatBoxHistoryUpdated", updateChatBoxHistory);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("chatBoxHistoryUpdated", updateChatBoxHistory);
    };
  }, []); // Empty dependency array means the effect runs once on mount

    // Function to handle scrolling to the bottom of the chat area
   const handleScrollToBottom = () => {
     if (chatAreaRef.current) {
       chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
     }
   }
   // Effect to scroll to bottom when the component mounts
   useEffect(() => {
     handleScrollToBottom();
   }, []);

  const [chapter, setChapter] = useState<string>('')
  const [topic, setTopic] = useState<string>('')
  const [subChapter, setSubChapter] = useState<string>('')
  const [hasSubChapter] = useState<boolean>(true)

  // Extracting chapter names from the CAIA_LEVEL_ONE data
  const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter);

  const subChapters = (propChapterName: string): string[] => {
    // Find the topics for the given chapter and extract their names
    const topic = CAIA_LAVEL_ONE.chapters.find((e) => e.chapter === propChapterName)?.topics;
    const subschap = topic?.map((e) => e.chapter) || [];
    console.log(subschap);
    return subschap;
  };

  // const topics = (chapterName: string) =>
  //   CFA_LAVEL_ONE.chapters.find((e) => e.chapter === chapterName)?.topics

  const subChaptersTopic = (
    propChapterName: string,
    propSubChapterName: string
  ) => {
    // Find the topics for the given chapter and sub-chapter, then extract sub-chapter names
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics
    const subschap =
      topic?.find((e) => e.chapter === propSubChapterName)?.topics || []
    return subschap
  }

  return (
    <ChatLayout chatType='advance' topic={topic} chapter={chapter} subChapter={subChapter}>
      <div className='px-3 py-1 border-b dark:border-gray-800 shadow-sm grid grid-cols-3 gap-5'>
        <Selector
          title='topic'
          options={chapters}
          onValueChange={(e) => setChapter(e)}
        />
        {hasSubChapter && chapter && (
          <Selector
            title='chapter'
            options={subChapters(chapter)}
            onValueChange={(e) => setSubChapter(e)}
          />
        )}
        {chapter && subChapter && (
          <Selector
            title='subChapter'
            options={subChaptersTopic(chapter, subChapter)}
            onValueChange={(e) => setTopic(e)}
          />
        )}
      </div>
      <div ref={chatAreaRef} className='flex-grow overflow-auto'>
        <div className='flex-grow overflow-y-auto p-4 flex flex-col justify-end gap-5'>
           {/* You can map the data chatbox throught this components and passing props that has value ans ( that means the chatbot ) and the content inside of it */}
          {/* Like beyond this */}
         {/* {data.map((item) => (
           <Chatbox key={Item.id} ans={ans} >
           {content}
         </Chatbox>
         ))} */}
          {/* <Chatbox>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox> */}
          {/* <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox> */}
          {chatBoxHistory?.map((item, index) => (
            <Chatbox key={index} ans={item?.role === "sender" ? false : true}>
              {item?.result}
            </Chatbox>
          ))}
          {/* <Chatbox>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox> */}
        </div>
      </div>
    </ChatLayout>
  )
}
