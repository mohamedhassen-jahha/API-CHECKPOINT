import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserList />
    </div>
  );
}

export default App;
