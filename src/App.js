import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Article></Article>
      <Todo></Todo>
      <Blog heading="React" author="Jems Smith"></Blog>
      <Blog heading="Javascript" author="Jems yarn"></Blog>
      <Blog heading="HTML" author="Mc Carry"></Blog>
    </div>
  );
}

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>Todo List {todos.length} </h1>
      {todos.map((todo) => (
        <User id={todo.id} title={todo.title}></User>
      ))}
    </div>
  );
}
function User(props) {
  return (
    <div className="blog">
      <h2> {props.id} </h2>
      <p> {props.title} </p>
    </div>
  );
}

function Mobile() {
  const [count, setCount] = useState(100);
  function HandleCharge() {
    const newCount = count - 10;
    if (newCount < 0) {
      return alert("Shut Down");
    }
    setCount(newCount);
  }
  function Charging() {
    const charge = count + 10;
    if (charge > 100) {
      return alert("Charge Complete");
    }
    setCount(charge);
  }

  return (
    <div>
      <h1> {count}% </h1>
      <button onClick={HandleCharge} style={{ marginRight: "10px" }}>
        Battery low
      </button>
      <button onClick={Charging}>Charging</button>
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h3>Heading: {props.heading} </h3>
      <p>Author: {props.author}</p>
    </div>
  );
}
function Article() {
  const headerText = {
    color: "#e67e22",
    fontSize: "32px",
    fontStyle: "italic",
  };
  return (
    <article className="blog">
      <h3>
        Hello <span style={headerText}>React</span> !!
      </h3>
      <p style={{ backgroundColor: "#95a5a6", padding: "15px", borderRadius: "10px", boxShadow: "inset -3px -5px 5px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam blanditiis, optio fuga iure, quibusdam alias amet omnis unde odio
        voluptate distinctio necessitatibus natus, incidunt est quidem! Voluptates, deleniti repellat.
      </p>
    </article>
  );
}
export default App;
