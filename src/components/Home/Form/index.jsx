import { useState } from "react";
import "./style.css";
import TotalMoney from "./TotalMoney";

const Form = ({ transactions, setTransactions, setFilteredTransactions }) => {
  const [input, setDescription] = useState("");
  const [inputValue, setValue] = useState(0);
  const [kindOf, setKindOf] = useState("Entrada");
  const [id, setId] = useState(0);

  function makeTransaction(event) {
    event.preventDefault();

    setTransactions((previewTransactions) => [
      ...previewTransactions,
      {
        description: input,
        kindOf,
        value: Number(inputValue),
        id: id,
      },
    ]);
    setId(id + 1);
    setDescription("");
    setValue("");
    setFilteredTransactions((previewTransactions) => [
      ...previewTransactions,
      {
        description: input,
        kindOf,
        value: Number(inputValue),
        id: id,
      },
    ]);
  }

  return (
    <div className="boxOne">
      <form className="form" onSubmit={makeTransaction}>
        <div className="description">
          <p>Descrição</p>
          <input
            name="description"
            type="text"
            value={input}
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
          <span>Ex: Compra de roupas</span>
        </div>

        <div className="box">
          <div className="value">
            <p>Valor</p>
            <div>
              <input
                name="value"
                type="value"
                value={inputValue}
                placeholder="1"
                onChange={(event) => setValue(event.target.value)}
              />
              <span>R$</span>
            </div>
          </div>

          <div className="typeOf">
            <p>Tipo de valor</p>
            <select
              name="transaction"
              onChange={(event) => setKindOf(event.target.value)}
            >
              <option value={"Entrada"}>Entrada</option>
              <option value={"Despesas"}>Despesas</option>
            </select>
          </div>
        </div>

        <button type="submit">Inserir valor</button>
      </form>
      <div className="accountInfo">
        <TotalMoney transactions={transactions} />
      </div>
    </div>
  );
};

export default Form;
