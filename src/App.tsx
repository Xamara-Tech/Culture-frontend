import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "@/pages/SearchPage.tsx";
function App() {
  return (
    <BrowserRouter>
    <div className="bg-background text-foreground min-h-svh">
      
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/search/:tribe" element={<SearchPage />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
};

export default App;