import React from "react";
import { FaRegFile, FaRegStar } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { MdLabelImportantOutline, MdOutlineWatchLater } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SidebarItems = [
  {
    icon: <RiInboxFill size={"16px"} />,
    text: "Inbox",
  },
  {
    icon: <FaRegStar size={"16px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"16px"} />,
    text: "Snoozed",
  },
  {
    icon: <MdLabelImportantOutline size={"16px"} />,
    text: "Important",
  },
  {
    icon: <VscSend size={"16px"} />,
    text: "Sent",
  },
  {
    icon: <FaRegFile size={"16px"} />,
    text: "Drafts",
  },
];
function Sidebar() {
  // const [Open, setOpen] = useState(false); // this is a local state variable
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[15%]">
        <div className="p-3">
          <button
            onClick={() => dispatch(setOpen(true))}
            className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]"
          >
            <LuPencil size={"24px"} />
            Compose
          </button>
        </div>
        <div className="text-gray-500">
          {SidebarItems.map((item, index) => {
            return (
              <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-gray-200 hover:cursor-pointer my-2">
                {item.icon}
                <p> {item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
