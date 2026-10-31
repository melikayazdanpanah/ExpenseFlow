import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

function StatCard({ title, amount, change, type }) {
  const isPositive = type !== "expense";

  const Icon = {
    balance: Wallet,
    income: TrendingUp,
    expense: TrendingDown,
  }[type];

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-gray-400 text-sm">{title}</p>

        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
          <Icon size={20} className="text-violet-400" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-3">
        ${amount.toLocaleString("en-US")}
      </h2>

      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-gray-500">
          compared to last month
        </span>
      </div>
    </div>
  );
}

export default StatCard;