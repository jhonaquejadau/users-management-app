import "./App.css";
import { Auth } from "./pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import { AuthSignIn } from "./pages/auth/AuthSignIn";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route exact path="/" element={<Auth/>}/>
        <Route path="/signin" element={<AuthSignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
