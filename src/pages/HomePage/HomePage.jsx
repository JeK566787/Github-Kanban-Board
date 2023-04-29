import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Choose the link</h1>
      <Link to="/DnDExample">DnDExample</Link>
      <Link to="/Kanban">Kanban</Link>
    </>
  );
};

export default HomePage;
