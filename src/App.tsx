import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Enquiry from "./Pages/Enquiry";
import Courses from "./Pages/Courses";
import Messages from "./Pages/Messages";
import Payments from "./Pages/Payments";
import Settings from "./Pages/Settings";


function App() {
  return (
    <div className="flex bg-[#F8F8F8] w-[1440px]">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/home/users" element={<Users />} />
          <Route path="/home/enquiry" element={<Enquiry />} />
          <Route path="/home/courses" element={<Courses/>} />
          <Route path="/home/messages" element={< Messages/>} />
          <Route path="/home/payments" element={<Payments />} />
          <Route path="/home/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
