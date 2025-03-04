import { Link } from "react-router-dom";
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
  return (
    <div className="w-[230px] h-[1149px] bg-white shadow-lg fixed p-5">
      <h1 className="text-2xl font-bold mb-6 text-[#013CC6]">Sales.</h1>
      <nav className="space-y-4">
        <SidebarLink to="/home" icon={<HomeIcon className="w-6 h-6" />} label="Dashboard" />
        <SidebarLink to="/home/users" icon={<UsersIcon className="w-6 h-6" />} label="Users" />
        <SidebarLink to="/home/enquiry" icon={<ChatBubbleLeftIcon className="w-6 h-6" />} label="Enquiry" />
        <SidebarLink to="/home/courses" icon={<BookOpenIcon className="w-6 h-6" />} label="Courses" />
        <SidebarLink to="/home/messages" icon={<EnvelopeIcon className="w-6 h-6" />} label="Message" />
        <SidebarLink to="/home/payments" icon={<WalletIcon className="w-6 h-6" />} label="Payment" />
        <SidebarLink to="/home/settings" icon={<Cog6ToothIcon className="w-6 h-6" />} label="Settings" />
      </nav>
    </div>
  )
}
const SidebarLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <Link to={to} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded hover:text-[#013CC6]">
    {icon}
    <span>{label}</span>
  </Link>
);

export default Sidebar