import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const HomePage = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <h1>Choose the link</h1>
      <Wrapper>
        <Link to="/DnDExample">DnDExample</Link>
        <Link to="/Kanban">Kanban</Link>
        <Link to={"/KanbanBeautiful"}>KanbanBeautiful</Link>
      </Wrapper>
    </>
  );
};

export default HomePage;
