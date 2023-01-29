import "./App.css";
import { Auth } from "./pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import { AuthSignIn } from "./pages/auth/AuthSignIn";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<AuthSignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
