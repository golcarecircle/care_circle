import { FC } from "react";
import Image from "next/image";

interface InboxProps {}

const Inbox: FC<InboxProps> = ({}) => {
  return (
      <div className="relative flex flex-row justify-between bg-gray-900 h-screen overflow-y-hidden">
      <div className="relative flex flex-col w-2/5 border-r-2 overflow-y-hidden">
  <div className="fixed top-0 w-full border-b-2 py-4 px-2">
    <input
      type="text"
      placeholder="search chatting"
      className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
    />
          </div>
          <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 overflow-y-scroll">
            <div className="w-1/4">
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover rounded-full"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Luis1994</div>
              <span className="text-gray-500">Pick me at 9:00 Am</span>
            </div>
          </div>
          
        </div>
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            <div className="flex justify-end mb-4">
              <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                Welcome to group everyone !
              </div>
            </div>
            <div className="flex justify-start mb-4">
              <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                at praesentium, aut ullam delectus odio error sit rem.
                Architecto nulla doloribus laborum illo rem enim dolor odio
                saepe, consequatur quas?
              </div>
            </div>
          </div>
          <div className="py-5">
            <input
              className="w-full bg-gray-300 py-5 px-3 rounded-xl"
              type="text"
              placeholder="type your message here..."
            />
          </div>
        </div>
        <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">Mern Stack Group</div>
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  className="object-cover rounded-xl h-64"
                  alt=""
                />
              </div>
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
      </div>
  );
};

export default Inbox;
