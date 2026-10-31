import api from "./api";

export const getTransactions = () => {
  return api.get("/transactions/");
};

export const createTransaction = (transaction) => {
  return api.post("/transactions/", transaction);
};

export const deleteTransaction = (id) => {
  return api.delete(`/transactions/${id}`);
};