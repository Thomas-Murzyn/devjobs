import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector((state) => {
    return state.user.user;
  });

  return (
    <div className="app">
      <Header />

      {user ? (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
