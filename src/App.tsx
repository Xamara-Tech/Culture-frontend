import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "@/pages/SearchPage.tsx";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
    <div className="bg-background text-foreground min-h-svh">
      
      <Routes>
      <Route path="/" element={<Login />} />   
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home />} />   
        <Route path="/search/:tribe" element={<SearchPage />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
};

export default App;