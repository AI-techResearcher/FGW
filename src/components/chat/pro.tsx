import { useRef, useEffect, useState, useCallback } from "react";
import ChatLayout from "@/layout/ChatLayout";
import Chatbox from "./subcomp/chatbox";
import SwipeChatBox from "./subcomp/swipeChatBox";
import Selector from "./subcomp/selector";
import { CAIA_LAVEL_ONE } from "@/lib/data/exams";
import { Button } from "../ui/button";

//Toaster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


enum tabEnum {
  chat,
  qna,
  flashCard,
}

export default function Pro() {

  const storedChatBoxHistory =
  JSON.parse(localStorage.getItem("chatBoxHistory")) ?? [];
const [chatBoxHistory, setChatBoxHistory] = useState(storedChatBoxHistory);

  // Reference to the chat area div

  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the bottom of the chat area
  const handleScrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  // State variables for chapter, topic, subChapter, etc.
  const [chapter, setChapter] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [subChapter, setSubChapter] = useState<string>("");
  const [hasSubChapter] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState(tabEnum.chat);

  //my state
  const [, setGeneratedContent] = useState("");
  const [selectedTypeOfQuestions, setSelectedTypeOfQuestions] =
    useState<string>("");
  const [selectedMathematicsDifficulty, setSelectedMathematicsDifficulty] =
    useState<string>("");
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    useState<string>("");
  const [selectedCalculator, setSelectedCalculator] = useState<string>("");
  const [selectedGenerationOfFlashcards, setSelectedGenerationOfFlashcards] =
    useState<string>("");
    const [result, setResults] = useState<string[][]>([]);
    const [selectdifficulty , setSelectDifficulty] = useState<string>("")
    const [currentIndex, setCurrentIndex] = useState(0);

    // const commonFeatures = [
    //   [
    //     "Strict Adherence to the Learning Objectives outlined in Exam Study Material",
    //     "No Mixing of Content between Different Exams",
    //     "Dedicated Content and Question Sets for Each Exam",
    //   ],
    //   [
    //     "non strich Adherence to the Learning Objectives outlined in Exam Study Material",
    //     "No Mixing of Content between Different Exams",
    //     "Data Content and Question Sets for Each Exam",
    //   ],
    // ];

    const [firstFeaturesDisplayed, setFirstFeaturesDisplayed] = useState(false);

  const handleClickGenerate = () => {
    setCurrentIndex(0);
    setFirstFeaturesDisplayed(true);
  };

  const handleClickAnswer = () => {
    setCurrentIndex(1);
    if (!firstFeaturesDisplayed) {
      setFirstFeaturesDisplayed(true);
    }
  };
    const currentFeatures = result[currentIndex];

  console.log(result , "reslut")
  // Function to handle the generation process
  const handleGenerate = useCallback(() => {
    // Combine the selected values
    const generatedText = `${chapter} - ${subChapter} - ${topic}`;
    // Set the generated content
    setGeneratedContent(generatedText);

    let data = {};

    if (currentTab == tabEnum.chat) {
      data = { chapter, subChapter, topic };
    } else if (currentTab == tabEnum.flashCard) {
      data = {
        topic,
        chapter,
        subChapter,
        difficulty: selectdifficulty,
        selectedGenerationOfFlashcards,
      };
    } else {
      data = {
        chapter,
        subChapter,
        topic,
        typeOfQuestions: selectedTypeOfQuestions,
        mathematicsDifficulty: selectedMathematicsDifficulty,
        numberOfQuestions: selectedNumberOfQuestions,
        calculator: selectedCalculator,

        difficulty: selectdifficulty,
      };
    }

    // Call the API to send the generated data to the backend
    sendGeneratedDataToBackend(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    chapter,
    subChapter,
    topic,
    selectedTypeOfQuestions,
    selectedMathematicsDifficulty,
    selectedNumberOfQuestions,
    selectedCalculator,
    selectedGenerationOfFlashcards,
    selectdifficulty
  ]);

  // Function to send generated data to backend API
  const sendGeneratedDataToBackend = (data) => {
    // Make API call to send data to backend
    fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Failed to send data to backend");
        // }
        // // Handle success
        // console.log("Data sent successfully to backend");
        return response.json();
      })
      
      .then(data => {
        setResults(data)
      console.log(data,"show")
      toast.success("Data sent successfully to backend")
    }) 
     

      .catch((error) => {
        // Handle error
        console.error("Error sending data to backend:", error);
        toast.error("Failed to send data to backend");
      });

  };
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
  }, []);

  // Effect to scroll to bottom when the currentTab changes
  useEffect(() => {
    handleScrollToBottom();
  }, [currentTab]);

  // Array of chapters from CAIA_LAVEL_ONE data
  const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter);
  console.log(chapters, "chapter");

  // Function to get sub-chapters based on the selected chapter
  const subChapters = (propChapterName: string) => {
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics;

    const subschap = topic?.map((e) => e.chapter) || [];
    console.log(subschap);
    return subschap;
  };

  // Function to get sub-chapters for a specific sub-chapter
  const subChaptersTopic = (
    propChapterName: string,
    propSubChapterName: string
  ) => {
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics;
    const subschap =
      topic?.find((e) => e.chapter === propSubChapterName)?.topics || [];
    return subschap;
  };

  // Arrays for difficulty, types of questions, and calculator models
  const difficulty = ["Easy", "Medium", "Hard", "Balanced"];
  const typeOfQuestions = [
    "Multiple 3 choice questions",
    "Multiple 4 choice questions",
    "Open-ended questions",
    "Case study with multiple 3 choice questions",
    "Case study with multiple 4 choice questions",
    "Case study with open-ended questions",
  ];

  const calculatorModel = [
    "Hewlett Packard 12C",
    "Texas Instruments BA II Plus",
  ];

  // Booleans to check the current tab
  const isChat = tabEnum.chat === currentTab;
  const isQna = tabEnum.qna === currentTab;
  const isFlashcard = tabEnum.flashCard === currentTab;

  
 

    // Call the fetchResult function and set the result state
    // useEffect(() => {
    //   // Simulated fetch operation (replace with your actual fetch logic)
    //   const fetchResult = () => {
    //     return [
    //       ["Question 1: Which investment was NOT typically held by institutions?", "a) Government debt", "b) Real estate", "c) Common stocks"],
    //       ["Question 2: What major change in investment evaluation occurred?", "a) Institutions began evaluating risk on a standalone basis", "b) Inclusion of alternative assets became less common", "c) Investments were evaluated on a portfolio basis"]
    //     ];
    //   };
  
    //   // Call the fetchResult function and set the result state
    //   setResults(fetchResult());
    // }, []); // Empty dependency array to run the effect only once
  

  return (
    <ChatLayout chatType="pro" topic={topic} chapter={chapter} subChapter={subChapter} >
      <div className="px-3 py-1 border-b dark:border-gray-800 shadow-sm space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={() => setCurrentTab(tabEnum.chat)}
            className={`${
              isChat
                ? "bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600"
                : ""
            }`}
            variant={"secondary"}
          >
            Chat
          </Button>
          <Button
            onClick={() => setCurrentTab(tabEnum.qna)}
            className={`${
              isQna
                ? "bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600"
                : ""
            }`}
            variant={"secondary"}
          >
            Questions/Answers
          </Button>
          <Button
            onClick={() => setCurrentTab(tabEnum.flashCard)}
            className={`${
              isFlashcard
                ? "bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600"
                : ""
            }`}
            variant={"secondary"}
          >
            FlashCards
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Selector
            title="Topic"
            options={chapters}
            onValueChange={(e) => setChapter(e)}
          />
          {/* Only visible if hasSubChapter and chapter is not null ( theres no data )*/}
          {hasSubChapter && chapter && (
            <Selector
              title="Chapter"
              options={subChapters(chapter)}
              onValueChange={(e) => setSubChapter(e)}
            />
          )}
          {chapter && subChapter && (
            <Selector
              title="Sub-Chapter"
              options={subChaptersTopic(chapter, subChapter)}
              onValueChange={(e) => setTopic(e)}
            />
          )}
          {isQna && (
            <Selector
              title="Type of Questions"
              options={typeOfQuestions}
              onValueChange={(e) => setSelectedTypeOfQuestions(e)}
            />
          )}
          {isQna && (
            <Selector
            title="Number of Math "
            options={Array(7)
              .fill("_")
              .map((_, i) => i + 1)}
            onValueChange={(e) => setSelectedMathematicsDifficulty(e)}
          />
          )}
          {(isFlashcard || isQna) && (
            <Selector
              title="Difficulty"
              options={difficulty}
              onValueChange={(e) => setSelectDifficulty (e)}
            />
          )}

          {isQna && (
            <Selector
              title="Number of Questions"
              options={Array(7)
                .fill("_")
                .map((_, i) => (i + 1).toString())}
              onValueChange={(e) => setSelectedNumberOfQuestions(e)}
            />
          )}
          {isQna && (
            <Selector
              title="Calculator"
              options={calculatorModel}
              onValueChange={(e) => setSelectedCalculator(e)}
            />
          )}
          {isFlashcard && (
            <Selector
              title="Generation of flashcards"
              options={
                Array(10)
                  .fill("_")
                  .map((e, i) => i + 1) as never
              }
              onValueChange={(e) => setSelectedGenerationOfFlashcards(e)}
            />
          )}
        </div>
      </div>
      <div ref={chatAreaRef} className="flex-grow overflow-auto">
        {/* Main chat area */}
        {isChat && (
          <div className="overflow-y-auto p-4 flex flex-col justify-end gap-5">
            {/* You can map the data chatbox throught this components and passing props that has value ans ( that means the chatbot ) and the content inside of it */}
            {/* Like beyond this */}
            {/* {data.map((item) => (
           <Chatbox key={Item.id} ans={ans} >
           {content}
         </Chatbox>
         ))} */}
             {chatBoxHistory?.map((item, index) => (
            <Chatbox key={index} ans={item?.role === "sender" ? false : true}>
              {item?.result}
            </Chatbox>
          ))}

            <Chatbox>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              nulla aliquid facilis labore voluptatem corrupti ratione iste.
              Perspiciatis dolorum incidunt inventore, voluptas architecto
              illum, non consequatur, iste suscipit rem excepturi.
            </Chatbox>
           
            {chatBoxHistory?.map((item, index) => (
            <Chatbox key={index} ans={item?.role === "sender" ? false : true}>
              {item?.result}
            </Chatbox>
          ))}
            
            
          </div>
        )}
        {/* Q&A Section */}
        {isQna && (
          <>
            <div className="overflow-y-auto p-4 flex flex-col justify-end gap-5">
              <div className="inline-flex gap-2 self-end">
              <Button
                  className="bg-green-500/60 text-black"
                  onClick={() => {
                    handleGenerate();
                    handleClickGenerate();
                  }}
                >
                  Genarate
                </Button>
                <Button
                  onClick={handleClickAnswer}
                  variant={"destructive"}
                  className="border-purple-400"
                >
                  Answer
                </Button>
              </div>
              {/* <Chatbox qna ans>
                {currentFeatures &&
                  currentFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
               
              </Chatbox> */}
 {currentFeatures?.map((questionAndOptions, index) => (
  <div key={index}>
    {Array.isArray(questionAndOptions) ? (
      questionAndOptions.map((content, i) => (
        <Chatbox key={i} ans={i !== 0}>
          {typeof content === 'string' ? (
            content.split('\n').map((line, j) => (
              <div key={j}>{line}</div>
            ))
          ) : (
            content
          )}
        </Chatbox>
      ))
    ) : (
      <Chatbox ans={true}>
        {typeof questionAndOptions === 'string' ? (
          questionAndOptions.split('\n').map((line, j) => (
            <div key={j}>{line}</div>
          ))
        ) : (
          questionAndOptions
        )}
      </Chatbox>
    )}
  </div>
))}




{/* {result.map((questionAndOptions, index) => (
  <div key={index}>
    {questionAndOptions.map((content, i) => (
      <Chatbox key={i} ans={i !== 0}>
        {content}
      </Chatbox>
    ))}
  </div>
))} */}


            </div>
          </>
        )}

        {/* Flashcard Section */}
        {isFlashcard && (
          <div className="overflow-y-auto p-4 flex flex-col justify-end gap-5">
            <div className="inline-flex gap-2 self-end">
              <Button
                className="bg-green-500/60 text-black"
                onClick={handleGenerate}
              >
                Genarate
              </Button>
            </div>
            <SwipeChatBox ans data={result} />
          </div>
        )}
      </div>
    </ChatLayout>
  );
}
