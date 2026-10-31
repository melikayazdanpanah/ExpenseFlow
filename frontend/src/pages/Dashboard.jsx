
import { useEffect, useState } from "react";
import { Plus, Bell, Search } from "lucide-react";

import {
  getTransactions,
  createTransaction,
  deleteTransaction,
} from "../services/transactions";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ExpenseChart from "../components/ExpenseChart";
import CategoryChart from "../components/CategoryChart";
import TransactionsTable from "../components/TransactionsTable";
import AddExpenseModal from "../components/AddExpenseModal";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch transactions from PostgreSQL
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        setTransactions(response.data);
        setError("");
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
        setError("Could not load transactions. Please check the backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // Calculate total income
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  // Calculate balance
  const totalBalance = totalIncome - totalExpenses;

  // Add transaction to PostgreSQL
  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await createTransaction(newTransaction);

      setTransactions((previous) => [
        response.data,
        ...previous,
      ]);

      setIsModalOpen(false);
      setError("");
    } catch (err) {
      console.error("Failed to create transaction:", err);
      setError("Could not save transaction.");
    }
  };

  // Delete transaction from PostgreSQL
  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);

      setTransactions((previous) =>
        previous.filter((item) => item.id !== id)
      );

      setError("");
    } catch (err) {
      console.error("Failed to delete transaction:", err);
      setError("Could not delete transaction.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex">

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-8">

        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 text-sm mt-2">
              Welcome back! Here's your financial overview.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 rounded-xl bg-[#111827] border border-gray-800 text-gray-400 hover:text-white">
              <Search size={19} />
            </button>

            <button className="p-3 rounded-xl bg-[#111827] border border-gray-800 text-gray-400 hover:text-white">
              <Bell size={19} />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition"
            >
              <Plus size={18} />
              Add Transaction
            </button>
          </div>
        </header>

        {/* Loading and Error Messages */}
        {loading && (
          <p className="text-gray-400 mb-5">
            Loading transactions...
          </p>
        )}

        {error && (
          <p className="text-red-400 mb-5">
            {error}
          </p>
        )}

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          <StatCard
            title="Total Balance"
            amount={totalBalance}
            change="+8.2%"
            type="balance"
          />

          <StatCard
            title="Total Income"
            amount={totalIncome}
            change="+12.5%"
            type="income"
          />

          <StatCard
            title="Total Expenses"
            amount={totalExpenses}
            change="-2.4%"
            type="expense"
          />
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
          <div className="xl:col-span-2">
            <ExpenseChart />
          </div>

          <div>
            <CategoryChart />
          </div>
        </section>

        {/* Transactions */}
        <section>
          <TransactionsTable
            transactions={transactions}
            onDeleteTransaction={handleDeleteTransaction}
          />
        </section>

      </main>

      {/* Add Transaction Modal */}
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTransaction={handleAddTransaction}
      />

    </div>
  );
}

export default Dashboard;
