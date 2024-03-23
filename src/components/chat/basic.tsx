import { useRef, useEffect, useState } from "react";
import ChatLayout from "@/layout/ChatLayout";
import Chatbox from "./subcomp/chatbox";

export default function Basic() {
  const storedChatBoxHistory =
    JSON.parse(localStorage.getItem("chatBoxHistory")) ?? [];
  const [chatBoxHistory, setChatBoxHistory] = useState(storedChatBoxHistory);
console.log(chatBoxHistory , "CHATBOX")
  // console.log(chatBoxHistory,JSON.parse(localStorage.getItem("chatBoxHistory")))
  // console.log(Array.from(chatBoxHistory)==Array.from(JSON.parse(localStorage.getItem("chatBoxHistory"))))

  // Reference to the chat area div for scrolling to bottom
  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  // Function to handle scrolling to the bottom of the chat area
  const handleScrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };
  // Define the updateChatBoxHistory function outside the useEffect
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

  useEffect(() => {
    handleScrollToBottom();
  }, [chatBoxHistory]);
  return (
    <ChatLayout chatType="basic">
      <div ref={chatAreaRef} className="flex-grow overflow-auto">
        <div className="flex-grow overflow-y-auto p-4 flex flex-col justify-end gap-5">
          {/* You can map the data chatbox throught this components and passing props that has value ans ( that means the chatbot ) and the content inside of it */}
          {/* Like beyond this */}
          {chatBoxHistory?.map((item, index) => (
            <Chatbox key={index} ans={item?.role === "sender" ? false : true}>
              {item?.result}
            </Chatbox>
          ))}
          {/* <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox> */}
        </div>
      </div>
    </ChatLayout>
  );
}
