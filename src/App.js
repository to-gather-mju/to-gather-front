import { Navigate, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Complete from "./pages/Complete";
import Location from "./pages/Location";
import Result from "./pages/Result";
import TimeTable from "./pages/TimeTable";
import Title from "./pages/Title";
import Vote from "./pages/Vote";
import Layout from "./components/Layout";
import TimeSet from "./pages/TimeSet";
import Name from "./pages/Name";
import Final from "./pages/Final";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/location" element={<Location />} />
        <Route path="/result" element={<Result />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/timeSet" element={<TimeSet />} />
        <Route path="/title" element={<Title />} />
        <Route path="/time" element={<Vote />} />
        <Route path="/final/:meetingId" element={<Final />} />
      </Routes>
    </Layout>
  );
}

export default App;
