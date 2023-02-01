import "./style.css";
import DefaultTrash from "../../../assets/DefaultTrash.png";

const List = ({
  setTransactions,
  transactions,
  filteredTransactions,
  setFilteredTransactions,
}) => {
  function removeTransactions(idToRemove) {
    const transactionsList = transactions.filter(
      (transaction) => transaction.id !== idToRemove
    );

    setTransactions(transactionsList);
    setFilteredTransactions(transactionsList);
  }

  function allTransactions() {
    setFilteredTransactions(transactions);
    console.log(filteredTransactions);
  }

  function entradasTransactions() {
    const entradas = transactions.filter(
      (transaction) => transaction.kindOf === "Entrada"
    );

    setFilteredTransactions(entradas);
  }

  function despesasTransactions() {
    const despesas = transactions.filter(
      (transaction) => transaction.kindOf === "Despesas"
    );

    setFilteredTransactions(despesas);
  }

  return (
    <div className="history">
      <div className="historyHeader">
        <h5>Resumo Financeiro</h5>
        <div>
          <span onClick={allTransactions}>Todos</span>
          <span onClick={entradasTransactions}>Entradas</span>
          <span onClick={despesasTransactions}>Despesas</span>
        </div>
      </div>
      <div className="cardShowcase">
        <ul className="cardList">
          {transactions.length === 0 ? (
            <li className="emptyBox">
              <p>Você ainda não possui nenhum lançamento</p>
            </li>
          ) : (
            filteredTransactions &&
            filteredTransactions.map((filteredTransactions, index) => (
              <li
                id={index}
                key={index}
                className={
                  filteredTransactions.kindOf === "Entrada"
                    ? "viewTransaction greenBorder"
                    : "viewTransaction whiteBorder"
                }
              >
                <div className="mainBox">
                  <p>{filteredTransactions.description}</p>
                  <span>{filteredTransactions.kindOf}</span>
                </div>
                <div className="secundaryBox">
                  <span>R$ {filteredTransactions.value}</span>
                  <img
                    src={DefaultTrash}
                    alt="Trash Icon"
                    onClick={() => removeTransactions(filteredTransactions.id)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default List;
