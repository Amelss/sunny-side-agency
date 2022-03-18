import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  return (
    <div className="grid">
      <Header />
      <div className="grid-cols-1 xl:grid-cols-2">
        <Body />
      </div>
    </div>
  );
}

export default App;
