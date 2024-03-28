import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BiSolidSend } from "react-icons/bi";
import { MdMicNone } from "react-icons/md";
import axios from "axios";
import History from "@/components/chat/subcomp/history";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useInputChange from "@/lib/hooks/useInput";
import { BsFillPencilFill } from "react-icons/bs";
import { Textarea } from "@/components/ui/textarea";
import { openHistory } from "@/lib/context";
import { useAtom } from "jotai";
//Toaster
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PaymentForm from "./PaymentForm";
function ChatLayout({
  children,
  chatType = "basic",
  chapter,
  subChapter,
  topic,
}: {
  children: React.ReactNode;
  chatType: "pro" | "basic" | "advance";
  chapter: string;
  topic: string;
  subChapter: string;
}) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  // Custom hook for handling input changes
  const { inputValues, handleInputChange, preventPaste } = useInputChange();

  // State from jotai atom to determine if history is open
  const [openHistoryValue] = useAtom(openHistory);
  const subscription = localStorage.getItem("subscription");
  const storedChatBoxHistory =
    JSON.parse(localStorage.getItem("chatBoxHistory")) ?? [];
  const [chatBoxHistory, setChatBoxHistory] = useState(storedChatBoxHistory);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendMessage = ({ question }) => {
    if (!question) {
      return;
    }

    setChatBoxHistory((prevState) => [
      ...prevState,
      { result: question, role: "sender" },
    ]);
    reset();
    const event = new Event("chatBoxHistoryUpdated");
    window.dispatchEvent(event);

    fetch("http://127.0.0.1:5001", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        question: question,
        chapter: chapter,
        subChapter: subChapter,
        topic: topic,
      }),
      redirect: "follow",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((result) => {
        console.log(result, "result");
        toast.success("Data sent successfully to backend");
        setChatBoxHistory((prevState) => [
          ...prevState,
          {
            result: result.result,
            role: "reciever",
          },
        ]);
        reset();
        window.dispatchEvent(event);
      })
      .catch((err) => {
        console.log("Error", err);
        toast.error("Failed to send data to backend");
      });
  };

  useEffect(() => {
    localStorage.setItem("chatBoxHistory", JSON.stringify(chatBoxHistory));
    // Trigger a custom event when chatBoxHistory is updated
    const event = new Event("chatBoxHistoryUpdated");
    window.dispatchEvent(event);
  }, [chatBoxHistory]);

  const onSubmit = handleSubmit((data) => {
    sendMessage(data);
    // handleGenerate(); // Call handleGenerate when form is submitted
  });

  useEffect(() => {
    fetch(`http://localhost:3001/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  useEffect(() => {
    axios.post("http://localhost:3001/create-payment-intent", { curr: "usd", amount: chatType === "basic" ? 29.99 : (chatType === "advance" ? 39.99 : 74.99) })
    .then((result) => {
      setClientSecret(result?.data?.clientSecret);
    });
  }, []);

  const isSubscribed = subscription === chatType;
  return (
    <>
      {!isSubscribed && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm chatType={chatType}/>
          </Elements>
      )}
      <div className={`p-3 ${!isSubscribed ? `blur-sm` : ``}`}>
        <ToastContainer />
        <div className="flex gap-3 sm:flex-row flex-col">
          {/* History component */}
          <div className={`${openHistoryValue ? "w-full sm:w-4/12" : "w-fit"}`}>
            <History
              chatBoxHistory={chatBoxHistory}
              isDouble={chatType !== "basic"}
            />
          </div>
          {/* Main chat content */}
          <div className="w-8/12 card">
            <div className="flex flex-col h-[85vh]">
              {/* Children components */}
              {children}

              {/* Input and action buttons */}
              <div className="flex flex-col items-end px-4">
                {/* Conditionally rendered Popover for additional options (for 'pro' chatType) */}
                {/* {chatType === "pro" && ( */}
                <Popover>
                  <PopoverTrigger asChild>
                    {/* Button to trigger the Popover */}
                    <Button variant="outline">
                      <BsFillPencilFill />
                    </Button>
                  </PopoverTrigger>
                  {/* PopoverContent with input fields and save button */}
                  <PopoverContent className=" md:w-96 mr-4 max-w-full">
                    <div className="space-y-5">
                      {/* Input for note's title */}
                      <div>
                        <Input
                          placeholder="Note’s Title"
                          name="title"
                          value={inputValues.title}
                          onChange={handleInputChange}
                          onPaste={preventPaste as never}
                        />
                      </div>
                      {/* Textarea for note's content */}
                      <div className="h-full">
                        <Textarea
                          placeholder="Note’s Content"
                          className="h-full"
                          name="content"
                          value={inputValues.content}
                          rows={9}
                          onPaste={preventPaste as never}
                          onChange={handleInputChange as never}
                        />
                      </div>
                    </div>
                    {/* Save button */}
                    <div className="flex justify-end mt-4">
                      <Button variant={"outline"}>save</Button>
                    </div>
                  </PopoverContent>
                </Popover>
                {/* )} */}

                {/* Input and action buttons for sending messages (for 'basic' and 'advance' chatTypes) */}
                {/* {chatType !== "pro" && ( */}
                <form
                  onSubmit={onSubmit}
                  className="flex gap-3 py-3 items-center w-full group/main"
                >
                  <div className="flex gap-3 py-3 items-center w-full group/main">
                    <Button variant={"ghost"} size="icon">
                      {/* Microphone icon */}
                      <MdMicNone className="w-6 h-auto text-black dark:text-gray-300" />
                    </Button>
                    {/* Input field */}
                    <Input
                      register={register}
                      name="question"
                      className="border-gray-400 bg-green-50/20"
                    />
                    {/* Button to send the message */}
                    <Button className="flex gap-2 items-center group/btn">
                      Sent
                      <BiSolidSend className="group-focus/btn:text-red-700 group-hover/main:animate-bounce" />
                    </Button>
                  </div>
                </form>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatLayout;
