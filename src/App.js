import "./App.css";
import Header from "./components/Header";
import Container from "./container";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Container />
      </div>
    </div>
  );
}

export default App;
