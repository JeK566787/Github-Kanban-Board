import { useState } from "react";
import { Link } from "react-router-dom";

const DnDExample = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "to do",
      items: [
        { id: 1, title: "go to the shop" },
        { id: 2, title: "throw the garbage" },
        { id: 3, title: "eat" },
      ],
    },
    {
      id: 2,
      title: "doing",
      items: [
        { id: 4, title: "go to the shop" },
        { id: 5, title: "throw the garbage" },
        { id: 6, title: "eat" },
      ],
    },
    {
      id: 3,
      title: "done",
      items: [
        { id: 7, title: "go to the shop" },
        { id: 8, title: "throw the garbage" },
        { id: 9, title: "eat" },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }

    console.log("onDropOver");
  }

  function dragLeaveHandler(e) {
    console.log("onDropLeave");
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);

    console.log("onDropStart");
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";

    console.log("onDropEnd");
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
    // remove item from current board
    // add item to new board
    console.log("onDrop");
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  return (
    <>
      <h1 className="test">Example hello</h1>
      <Link to="/">Back</Link>
      <div className="app">
        {boards.map((board) => (
          <div
            key={board.id}
            className="board"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            <div className="board__title">{board.title}</div>
            {board.items.map((item) => (
              <div
                key={item.id}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable={true}
                className="item"
              >
                {item.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DnDExample;
