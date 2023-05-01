import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DnDExample from "../pages/DnD_example/DnDExample";
import Kanban from "../pages/Movie_Kanban/Kanban";
import KanbanBeautiful from "../pages/KanbanLibrary/KanbanBeautiful";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/DnDExample" element={<DnDExample />} />
      <Route path="/Kanban" element={<Kanban />} />
      <Route path="/KanbanBeautiful" element={<KanbanBeautiful />}></Route>
    </Routes>
  );
};

export default App;
