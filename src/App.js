import "./App.css";
import Header from "./Components/Header";
import Divbody from "./Components/Divbody";
import { useState, useEffect } from "react";
function App() {
  const [group, setgroup] = useState("userId");
  const [order, setorder] = useState("title");
  return (
    <div className="App">
      <Header setgroup={setgroup} setorder={setorder} />
      <Divbody group={group} order={order} />
    </div>
  );
}

export default App;
