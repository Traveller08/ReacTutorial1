import "./styles.css";
import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </div>
  );
}
