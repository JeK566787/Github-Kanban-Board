import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import css from "../Rows/Card.module.css";
import { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";

const Rows = () => {
  let text = useSelector((state) => state.mainState.activity);
  const error = useSelector((state) => state.mainState.error);

  const readPrevent = () => {
    if (!text.results) {
      return text;
    }
    return text.results;
  };
  // --------------------getItems------------------------
  const [items, setItems] = useState(null);
  function addItems(items) {
    setItems(items);
  }
  useEffect(() => {
    addItems(readPrevent());
  });
  // -------------------getItems---------------------------

  const [boards, setBoards] = useState(["ToDo", "Doing", "Done"]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  console.log(`curreBoard:${currentBoard}`);
  console.log(`currentItem:${currentItem}`);

  function dragOverHandler(e) {
    e.preventDefault();

    console.log("onDropOver");
  }

  function dragLeaveHandler(e) {
    console.log("onDropLeave");
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);

    console.log("onDropStart");
  }

  function dragEndHandler(e) {
    setCurrentBoard(null);
    setCurrentItem(null);
    console.log("onDropEnd");
  }

  function dropHandler(e) {
    e.preventDefault();
    // remove item from current board
    // add item to new board
    console.log("onDrop");
  }

  const [newBoard, setNewBoard] = useState(null);

  return (
    <>
      <Row>
        <Col className="text-center board">
          <Card.Body>
            <div>
              {boards[0]}
              <ul>
                {readPrevent().map((item) => (
                  <Card.Title
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) =>
                      dragStartHandler(e, boards[0], item.original_title)
                    }
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, item)}
                    draggable={true}
                    className={css.card}
                    key={item.id}
                  >
                    {item.original_title}
                  </Card.Title>
                ))}
              </ul>
            </div>
            <h1>{error}</h1>
          </Card.Body>
        </Col>
        <Col
          className="text-center board"
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
        >
          <div>
            {boards[1]}
            <ul>
              {" "}
              {readPrevent().map((item) => (
                <Card.Title
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) =>
                    dragStartHandler(e, boards[1], item.original_title)
                  }
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, item)}
                  draggable={true}
                  className={css.card}
                  key={item.id}
                >
                  {/* {item.original_title} */}
                </Card.Title>
              ))}
            </ul>
          </div>
        </Col>
        <Col
          className="text-center board"
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
        >
          <h2>Done</h2>
        </Col>
      </Row>
    </>
  );
};

export default Rows;
