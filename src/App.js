import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Article></Article>
      <Mobile></Mobile>
      <Blog heading="Recharge Your Down Battery" author="Jhanker Mahbub"></Blog>
      <Blog heading="What will people say?" author="Ayman Sadik"></Blog>
      <Blog heading="Spoken English" author="Munzirin Shahid"></Blog>
      <AllPosts></AllPosts>
    </div>
  );
}

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2 style={headerText}>All Post: {posts.length} </h2>
      {posts.map((post) => (
        <User id={post.id} title={post.title} body={post.body}></User>
      ))}
    </div>
  );
}
function User(props) {
  return (
    <div className="blog" style={{ textTransform: "capitalize" }}>
      <h1> {props.id} </h1>
      <h3>Subject: {props.title} </h3>
      <p style={{ textAlign: "left" }}> Description: {props.body} </p>
    </div>
  );
}

function Mobile() {
  const [charge, setCharge] = useState(100);
  function HandleChargeBtn() {
    if (charge < 10) {
      return alert("Shutting Down");
    }
    setCharge(charge - 10);
  }
  function ChargeBtn() {
    if (charge > 90) {
      return alert("Charge Complete");
    }
    setCharge(charge + 10);
  }
  return (
    <div>
      <h1>{charge}%</h1>
      <button onClick={HandleChargeBtn} style={{ marginRight: "10px" }}>
        Battery Low
      </button>
      <button onClick={ChargeBtn}>Charging</button>
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h3>Heading: {props.heading} </h3>
      <h5>Author {props.author} </h5>
    </div>
  );
}
const headerText = {
  color: "#2d3436",
  fontSize: "30px",
  textTransform: "uppercase",
  fontWeight: "bolder",
};
function Article() {
  return (
    <article className="blog">
      <h2>
        Hello <span style={headerText}>React</span>!
      </h2>
      <p style={{ fontSize: "20px", textTransform: "capitalize", textAlign: "left" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae reprehenderit excepturi, quam earum nulla harum magni unde, placeat dolorum
        totam atque repudiandae! Tempora quaerat error, corporis perferendis maxime ducimus voluptatum.
      </p>
    </article>
  );
}

export default App;
