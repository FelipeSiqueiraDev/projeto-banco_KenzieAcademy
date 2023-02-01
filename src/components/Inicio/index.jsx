import NuKenzie from "../../assets/NuKenzie.png";
import IndexImg from "../../assets/IndexImg.png";
import "./style.css";

const Inicio = ({ setPage }) => {
  function homePage() {
    setPage(false);
  }

  return (
    <div className="initialPage">
      <div className="mainDiv">
        <img className="logo" src={NuKenzie} alt="NuKenzie logo"></img>
        <h3>Centralize o controle das suas finanças</h3>
        <p>de forma rápida e segura</p>
        <button type="button" onClick={homePage}>
          Iniciar
        </button>
      </div>
      <div className="imgDiv">
        <img src={IndexImg} alt="NuKenzie wellcome"></img>
      </div>
    </div>
  );
};

export default Inicio;
