import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import style from "./style/Card.module.css";

function Card() {
  const [url, setUrl] = useState("https://randomuser.me/api/?results=5");
  const { data: users } = useFetch(url);
  const userRefresh = () => {
    setUrl("https://randomuser.me/api/?results=10");
  };
  console.log(users);
  return (
    <div className={style.container}>
      <button onClick={userRefresh}>Refref</button>
      {users &&
        users.results.map((user) => {
          const { name, email, dob, picture, location, phone } = user;
          console.log(dob);
          return (
            <div className={style.card} key={dob.date}>
              <img className={style.imgs} src={picture.large}></img>
              <br />
              <h4 className={style.cardTitle}>NAME: {name.first}</h4>
              <p>AGE: {dob.age}</p>
              <p>PHONE: {phone}</p>
              <p>CITY: {location.city}</p>
              <p>EMAIL: {email}</p>
              <button>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
