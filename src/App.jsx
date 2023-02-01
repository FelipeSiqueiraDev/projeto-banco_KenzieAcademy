import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Inicio from "./components/Inicio";

function App() {
  const [page, setPage] = useState(true);
  return (
    <div className="App">
      {page ? <Inicio setPage={setPage} /> : <Home setPage={setPage} />}
    </div>
  );
}

export default App;
