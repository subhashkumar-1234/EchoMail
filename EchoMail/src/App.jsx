import "./App.css";
import Navbar from "./component/Navbar/Navbar";
// import Sidebar from "./component/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Inbox from "./component/Inbox";
import Mailbox from "./component/Mailbox";
import Sendmail from "./component/Sendmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/Mailbox/:id",
        element: <Mailbox />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar />
        <RouterProvider router={router} />
        <div className="absolute w-[37%]  bottom-0 right-16 z-10 ">
          <Sendmail />
        </div>
      </div>
    </>
  );
}

export default App;
