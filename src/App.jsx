import "./App.css";
import UserContextProvider from "./components/userContextProvider";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
