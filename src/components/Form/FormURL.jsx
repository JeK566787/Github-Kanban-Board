import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchActivity } from "../../redux/operation";
import css from "./FormURL.module.css";

const FormURL = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchActivity(input));
    setInput((e.target.value = ""));
  };
  return (
    <>
      <Form className="d-flex mt-5 mb-5" onSubmit={onFormSubmit}>
        <Form.Group className="w-75 " controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            placeholder="Enter repo URL"
          />
        </Form.Group>

        <Button className={css.ml} variant="primary" type="submit">
          Load issues
        </Button>
      </Form>
    </>
  );
};

export default FormURL;
