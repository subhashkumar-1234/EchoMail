import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Sendmail() {
  const [formData, setformData] = useState({
    to: "",
    subject: "",
    massage: "",
  });
  const changeEventHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      massage: formData.massage,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));
    setformData({
      to: "",
      subject: "",
      massage: "",
    });
  };
  const open = useSelector((store) => store.app.open);
  // const open = true;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`${open ? "block" : "hidden"}
        bg-white max-w-6xl  shadow-xl shadow-slate-600 rounded-t-md `}
      >
        <div className="flex items-center justify-between rounded-t-md px-3 py-2 bg-[#F2F6FC]">
          <h1>New Massage</h1>
          <div
            onClick={() => dispatch(setOpen(false))}
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <RxCross2 size={"10px"} />
          </div>
        </div>
        <form onSubmit={submitHandler} className=" flex flex-col p-3 gap-2">
          <input
            onChange={changeEventHandler}
            type="text"
            value={formData.to}
            name="to"
            placeholder="To"
            className=" outline-none py-1"
          />
          <input
            onChange={changeEventHandler}
            type="text"
            value={formData.subject}
            name="subject"
            placeholder="Subject"
            className="outline-none py-1"
          />
          <textarea
            onChange={changeEventHandler}
            value={formData.massage}
            name="massage"
            cols={"30"}
            rows={"10"}
            id=""
            className="outline-none py-1"
          ></textarea>
          <button
            type="submit"
            className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Sendmail;
