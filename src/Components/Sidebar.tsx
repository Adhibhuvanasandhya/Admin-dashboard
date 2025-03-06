import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  ChatBubbleLeftIcon,
  BookOpenIcon,
  EnvelopeIcon,
  WalletIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const location = useLocation(); // Get current path

  return (
    <div className="w-[230px] h-screen bg-white shadow-lg fixed p-5">
      <h1 className="text-2xl font-bold mb-6 text-[#013CC6]">Sales.</h1>
      <nav className="space-y-4">
        <SidebarLink to="/home" icon={<HomeIcon className="w-6 h-6" />} label="Dashboard" active={location.pathname === "/home"} />
        <SidebarLink to="/home/users" icon={<UsersIcon className="w-6 h-6" />} label="Users" active={location.pathname === "/home/users"} />
        <SidebarLink to="/home/enquiry" icon={<ChatBubbleLeftIcon className="w-6 h-6" />} label="Enquiry" active={location.pathname === "/home/enquiry"} />
        <SidebarLink to="/home/courses" icon={<BookOpenIcon className="w-6 h-6" />} label="Courses" active={location.pathname === "/home/courses"} />
        <SidebarLink to="/home/messages" icon={<EnvelopeIcon className="w-6 h-6" />} label="Message" active={location.pathname === "/home/messages"} />
        <SidebarLink to="/home/payments" icon={<WalletIcon className="w-6 h-6" />} label="Payment" active={location.pathname === "/home/payments"} />
        <SidebarLink to="/home/settings" icon={<Cog6ToothIcon className="w-6 h-6" />} label="Settings" active={location.pathname === "/home/settings"} />
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 p-2 rounded transition duration-300 ${
      active ? "bg-[#013CC6] text-white" : "hover:bg-gray-100 hover:text-[#013CC6]"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Sidebar;
