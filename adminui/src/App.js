import "./App.css";
import Header from "./components/Header/Header";
import { Pagination } from "./components/Pagination/Pagination";

import UserContextProvider from "./components/context/UserContextProvider";
function App() {
  return (
    <div className="App">
        <Header />
        <Pagination />
    </div>
  );
}

export default App;
