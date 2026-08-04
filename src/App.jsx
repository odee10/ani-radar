import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import ErrorState from "./pages/ErrorState";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<ErrorState />} />
    </Routes>
  );
}

export default App