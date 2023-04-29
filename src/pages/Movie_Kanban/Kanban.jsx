import Container from "react-bootstrap/Container";
import FormURL from "../../components/Form/FormURL";
import Rows from "../../components/Rows/Rows";
import { Link } from "react-router-dom";

const Kanban = () => {
  return (
    <Container>
      <FormURL />
      <Link to="/">Back</Link>
      <Rows />
    </Container>
  );
};

export default Kanban;
