import { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState(["youtube", "google", "amazon"]);
  const [company, setCompany] = useState("");

  const handleClick = () => {
    setList((previous) => {
      return [...previous, company];
    });
    setCompany("");
  };

  return (
    <div className="App">
      <h1>useState-Array</h1>
      <input
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />
      <button onClick={handleClick}> add company</button>
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
