import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./style.css";
import NuKenzieBlack from "../../assets/NuKenzieBlack.png";

const Home = ({ setPage }) => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  function initialPage() {
    setPage(true);
  }
  return (
    <div className="homePage">
      <div className="header">
        <img src={NuKenzieBlack} alt="NuKenzie logo"></img>
        <button type="button" onClick={initialPage}>
          Inicio
        </button>
      </div>

      <div className="transitionBox">
        <Form
          setTransactions={setTransactions}
          transactions={transactions}
          setFilteredTransactions={setFilteredTransactions}
        />
        <List
          setTransactions={setTransactions}
          transactions={transactions}
          filteredTransactions={filteredTransactions}
          setFilteredTransactions={setFilteredTransactions}
        />
      </div>
    </div>
  );
};

export default Home;
