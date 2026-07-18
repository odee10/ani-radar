import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App