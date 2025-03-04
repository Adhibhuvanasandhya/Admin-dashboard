import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 absolute left-3 top-2" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border-1 border-gray-200 outline-none rounded-sm w-96 bg-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white items-center">
          <BellIcon className="w-6 h-6 text-gray-500" />
          </div>
          <div className="bg-white items-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          </div>
        </div>
      </div>

      {/* Sales Information */}
      <div className="w-[1130px] h-[150px]">
      <h2 className="text-2xl font-bold mb-4">Sales Information</h2>
      <div className="grid grid-cols-4 gap-4 mb-4 space-y-5">
        <div className="space-y-3">
        <p>User</p>
        <input type="text" placeholder="Enter Customer Name" className="p-2 border border-gray-200 outline-none bg-white rounded-md" />
        </div>
        <div className="space-y-3">
        <p>User ID</p>
        <input type="text" placeholder="Enter Invoice ID" className="p-2 border border-gray-200 outline-none bg-white rounded-md" />
        </div>
        <div className="space-y-3">
          <p>Start Date</p>
        <input  className="p-2 border border-gray-200 rounded-md outline-none bg-white" placeholder="Start Date" />
        </div>
        <div className="space-y-3">
          <p>End Date</p>
        <input className="p-2 border border-gray-200  rounded-md outline-none bg-white" placeholder="End Date"/>
        </div>
      </div>
      </div>

      {/* Sales Table */}
      <div className="bg-white shadow rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="">
              <th className="p-3 text-left"><input type="checkbox" /></th>
              <th className="p-3 text-left">Users ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array(5).fill(null).map((_, index) => (
              <tr key={index} className="border-[0.5px] border-gray-200">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 text-blue-600 cursor-pointer">#AHGA68</td>
                <td className="p-3">23/09/2022</td>
                <td className="p-3">Jacob Marcus</td>
                <td className="p-3">$100</td>
                <td className="p-3">$000</td>
                <td className="p-3">$000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
