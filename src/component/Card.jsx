import { useState, useEffect } from "react";
import style from "./style/Card.module.css";

function Card() {
  const [users, setUser] = useState([]);
  const [url, setUrl] = useState("https://randomuser.me/api/?results=5");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [url]);

  console.log(users);

  return (
    <div className={style.container}>
      {users.results.map((user) => {
        const { name, email, dob, id, picture } = user;
        return (
          <div className={style.card} key={id.value}>
            <img src={picture.large}></img>
            <br />
            <span className={style.cardTitle}>Name: {name.first}</span>
            <p>Age: {dob.age}</p>
            <p>Email: {email}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
