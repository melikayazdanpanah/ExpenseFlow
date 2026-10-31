import { useState } from "react";
import { X } from "lucide-react";

function AddExpenseModal({ isOpen, onClose, onAddTransaction }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Food",
    amount: "",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
  });

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || Number(formData.amount) <= 0) {
      return;
    }

    onAddTransaction({
      ...formData,
      id: Date.now(),
      amount: Number(formData.amount),
    });

    setFormData({
      title: "",
      category: "Food",
      amount: "",
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#111827] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Add Transaction
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Transaction Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 bg-[#1e293b] p-3 text-white outline-none focus:border-violet-500"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Grocery shopping"
              required
              className="w-full rounded-xl border border-gray-700 bg-[#1e293b] p-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 bg-[#1e293b] p-3 text-white outline-none focus:border-violet-500"
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Bills</option>
              <option>Entertainment</option>
              <option>Shopping</option>
              <option>Health</option>
              <option>Salary</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Amount ($)
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              min="0.01"
              step="0.01"
              required
              className="w-full rounded-xl border border-gray-700 bg-[#1e293b] p-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-700 bg-[#1e293b] p-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-700 py-3 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-violet-600 py-3 font-medium text-white hover:bg-violet-500"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseModal;