import { Navigate, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Complete from "./pages/Complete";
import Location from "./pages/Location";
import Result from "./pages/Result";
import Time from "./pages/Time";
import Title from "./pages/Title";
import Vote from "./pages/Vote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<Home />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Complete" element={<Complete />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/Time" element={<Time />} />
      <Route path="/Title" element={<Title />} />
      <Route path="/Time" element={<Vote />} />
    </Routes>
  );
}

export default App;
