import style from "./style/Contact.module.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Contact() {
  const [url, setUrl] = useState("https://randomuser.me/api/?results=5");
  const { data: users, loading } = useFetch(url);
  const userRefresh = () => {
    setUrl("https://randomuser.me/api/?results=10");
  };
  return (
    <div className={style.container}>
      {loading && <div>Loding...</div>}
      <button onClick={userRefresh}>Refref</button>
      {users &&
        users.results.map((user) => {
          const { name, email, dob, picture, location, phone } = user;
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

export default Contact;
