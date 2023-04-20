import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity } from "../redux/operation";
import { addURL } from "../redux/testSlice";

const App = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const url = e.target.elements.url.value;
    dispatch(addURL(url));
    e.target.reset();
  };

  // useEffect(() => {
  //   dispatch(fetchActivity());
  // }, [dispatch]);

  const text = useSelector((state) => state.mainState.activity);
  const loadIssue = useSelector((state) => state.mainState.formURL);

  const onBtnClick = () => {
    dispatch(fetchActivity());
  };

  // const renderIssues = (arr) => {
  //   return arr.map((el) => console.log(el));
  // };

  const render = () => {
    if (text === null) {
      return;
    }
    return text.activity;
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          <input name="url" type="text" placeholder="Enter repo URL" />
        </label>

        <button type="submit">Load issues</button>
      </form>

      <h1>{render()}</h1>
      <button type="button" onClick={onBtnClick}>
        what to do
      </button>

      <ul>
        {loadIssue.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
