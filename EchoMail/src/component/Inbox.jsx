import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Massages from "./Massages";

const InboxItems = [
  {
    icon: <MdInbox size={"16px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"16px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"16px"} />,
    text: "Social",
  },
];
function Inbox() {
  const [mailTypeSelecte, setMailTypeSelecte] = useState(0);
  return (
    <>
      <div className="flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2 ">
            <div className="flex items-center gap-1">
              <MdCropSquare size={"20px"} />
              <FaCaretDown size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdRefresh size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={"20px"} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500 ">1-50 of 1000</p>
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowLeft size={"18px"} />
            </button>
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowRight size={"18px"} />
            </button>
          </div>
        </div>
        <div className="h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-1">
            {InboxItems.map((item, index) => {
              return (
                <button
                  className={` ${
                    mailTypeSelecte === index
                      ? "border-b-4   border-b-blue-600 text-blue-600"
                      : "border-b-4 border-b-transparent"
                  } flex items-center gap-5 p-4 w-64 hover:bg-gray-100 `}
                  onClick={() => setMailTypeSelecte(index)}
                  key={index}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              );
            })}
          </div>
          <Massages />
        </div>
      </div>
    </>
  );
}

export default Inbox;
