import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function TransactionsTable({ transactions }) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Transactions
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Your latest financial activities
          </p>
        </div>

        <button className="text-sm text-violet-400 hover:text-violet-300">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs uppercase text-gray-500 border-b border-gray-800">
              <th className="pb-4 font-medium">Transaction</th>
              <th className="pb-4 font-medium">Category</th>
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              const isIncome = transaction.type === "income";

              return (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-800/70 last:border-0"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isIncome
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {isIncome ? (
                          <ArrowDownRight size={18} />
                        ) : (
                          <ArrowUpRight size={18} />
                        )}
                      </div>

                      <span className="text-sm text-white font-medium">
                        {transaction.title}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-sm text-gray-400">
                    {transaction.category}
                  </td>

                  <td className="py-4 text-sm text-gray-400">
                    {transaction.date}
                  </td>

                  <td
                    className={`py-4 text-sm font-semibold text-right ${
                      isIncome ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isIncome ? "+" : "-"}$
                    {transaction.amount.toLocaleString("en-US")}
                  </td>
                </tr>
              );
            })}

            {transactions.length === 0 && (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">
                  No transactions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsTable;