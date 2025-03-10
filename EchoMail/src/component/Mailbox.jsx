import React from "react";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdMore,
} from "react-icons/md";
import { BiArchive } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function Mailbox() {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.app);
  const params = useParams();

  // Delete paticular email

  const deleteMail = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2 ">
            <div
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <IoMdArrowBack size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <BiArchive size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineReport size={"20px"} />
            </div>
            <div
              onClick={() => deleteMail(params.id)}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <MdDeleteOutline size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineMarkEmailUnread size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineWatchLater size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineAddTask size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineDriveFileMove size={"20px"} />
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
        <div className="h-[90vh] overflow-y-auto p-4">
          <div className="flex justify-between bg-white items-center gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
              <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
            </div>
            <div className="flex-none text-gray-400 my-5 text-sm">
              <p>
                {new Date(
                  selectedEmail?.createdAt?.seconds * 1000
                ).toUTCString()}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <h1>{selectedEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-10">
            <p>{selectedEmail?.massage}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mailbox;
