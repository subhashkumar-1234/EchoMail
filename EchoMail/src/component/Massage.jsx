import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";

function Massage({ email }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const OpenMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/Mailbox/${email.id}`);
  };
  return (
    <div
      onClick={OpenMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md "
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className=" w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className=" w-4 h-4" />
        </div>
      </div>
      <div className="flex justify-between ml-4">
        {/* <h1>{email.subject} -</h1> */}
        <p className="text-gray-600 truncate inline-block max-w-full ">
          {email?.massage}
          {/* {`${
            email.message.length > 130
              ? `${email?.message.substring(0, 130)}...`
              : email.message
          }`} */}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
}

export default Massage;
