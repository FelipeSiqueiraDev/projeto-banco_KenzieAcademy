import "./style.css";

const TotalMoney = ({ transactions }) => {
  return (
    <div className="totalMoney">
      <div className="textBox">
        <p>Valor total:</p>
        <span>O valor se refere ao saldo</span>
      </div>
      <div className="moneyBox">
        <span>
          R$
          {transactions.reduce((total, transaction) => {
            return transaction.kindOf === "Entrada"
              ? total + transaction.value
              : total - transaction.value;
          }, 0)}
        </span>
      </div>
    </div>
  );
};

export default TotalMoney;
