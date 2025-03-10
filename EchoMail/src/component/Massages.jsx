import React, { useEffect } from "react";
import Massage from "./Massage";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { setEmails } from "../redux/appSlice";

function Massages() {
  const dispatch = useDispatch();
  const { emails } = useSelector((store) => store.app);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscriber = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    // cleanup

    return () => unsubscriber();
  }, []);

  return (
    <>
      <div>{emails && emails?.map((email) => <Massage email={email} />)}</div>
    </>
  );
}

export default Massages;
