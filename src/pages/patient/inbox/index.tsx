import { FC } from "react";
import Image from "next/image";

interface InboxProps {}

const Inbox: FC<InboxProps> = ({}) => {
  return (
    <div className="flex w-full h-full">
      <div className="grid grid-cols-4  relative bg-gray-900 min-h-full max-h-full rounded-xl">
        <div className="col-span-1 bg-gray-900 p-4 border-r-2 border-gray-800 overflow-y-auto">
          <div className="py-4 px-2">
            <input
              type="text"
              placeholder="search for a chat"
              className="bg-gray-100 rounded-full py-2 px-4 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white focus:text-gray-900"
            />
          </div>
          <div className="flex flex-row py-4 px-2 justify-center items-center">
            <div className="relative h-9 w-9 rounded-full">
              <Image
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                fill
                className="rounded-full h-full w-full"
                alt=""
              />
            </div>
            <div className="flex-grow ml-2 text-sm">
              <div className="text-sm font-semibold text-gray-200">
                Luis1994
              </div>
              <span className="text-gray-500">Pick me at 9:00 Am</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gray-900 h-full flex-col justify-end py-2  overflow-y-hidden">
          <div className="flex-1 p:2 justify-between flex flex-col h-full">
            <div
              id="messages"
              className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            >
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        Can be verified on any platform using docker
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-1"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                        Your error message says permission denied, npm global
                        installs must be given root privileges.
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-2"
                  />
                </div>
              </div>

              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                        yes, I have a mac. I never had issues with root
                        permission as well, but this helped me to solve the
                        problem
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-2"
                  />
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                        I get the same error on Arch Linux (also with sudo)
                      </span>
                    </div>
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                        I also have this issue, Here is what I was doing until
                        now: #1076
                      </span>
                    </div>
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        even i am facing
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-1"
                  />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-800 px-4 pt-4 mb-2 sm:mb-0">
              <div className="relative flex">
                <span className="absolute inset-y-0 flex items-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  placeholder="Write your message!"
                  className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                />
                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                  >
                    <span className="font-bold">Send</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 ml-2 transform rotate-90"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 p-4 border-l-2 border-gray-800 ">
          <div className="flex flex-col">
            <div className="font-semibold text-xl py-4">Mern Stack Group</div>
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              className="object-cover rounded-xl h-64"
              alt=""
            />
            <div className="font-semibold py-4">Created 22 Sep 2021</div>
            <div className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              perspiciatis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
