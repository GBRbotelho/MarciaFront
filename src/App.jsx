import "./App.css";
import Routes from "./routes/Routes";
import AllContextsProvider from "./contexts/AllContext";

function App() {
  return (
    <AllContextsProvider>
      <Routes />
    </AllContextsProvider>
  );
}

export default App;
