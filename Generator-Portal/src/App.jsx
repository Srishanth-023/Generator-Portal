import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FacultyRequest from "./pages/Faculty_Request";
import EventApproval from "./pages/Event_Approval";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Faculty_Request" element={<FacultyRequest />} />
      <Route path="/Event_Approval" element={<EventApproval />} />
    </Routes>
  );
}

export default App;
