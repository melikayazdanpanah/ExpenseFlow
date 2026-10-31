import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  ChartNoAxesCombined,
  Settings,
  CircleHelp,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Transactions", icon: ArrowLeftRight },
  { name: "Budgets", icon: Wallet },
  { name: "Analytics", icon: ChartNoAxesCombined },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-64 min-h-screen bg-[#111827] border-r border-gray-800 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
          <Wallet size={22} className="text-white" />
        </div>

        <h1 className="text-xl font-bold text-white">
          Expense<span className="text-violet-400">Flow</span>
        </h1>
      </div>

      {/* Main menu */}
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
        Menu
      </p>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                isActive
                  ? "bg-violet-600/20 text-violet-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom menu */}
      <div className="mt-auto space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white">
          <CircleHelp size={19} />
          <span>Help Center</span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <div className="border-t border-gray-800 pt-5 mt-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div>
            <p className="text-sm text-white font-medium">My Account</p>
            <p className="text-xs text-gray-500">Personal</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;