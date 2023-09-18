import style from "./style/Contact.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Contact() {
  const [url, setUrl] = useState("https://randomuser.me/api/?results=5");
  const { data: users, loading } = useFetch(url);
  const userRefresh = () => {
    setUrl("https://randomuser.me/api/?results=10");
  };
  return (
    <>
      <button onClick={userRefresh}>Refresh</button>
      <div className={style.container}>
        {loading && <div className={style.loading}>Loding...</div>}
        {users &&
          users.results.map((user) => {
            const { name, dob, picture } = user;
            return (
              <div className={style.card} key={dob.date}>
                <img className={style.imgs} src={picture.large}></img>
                <br />
                <h4 className={style.cardTitle}>{name.first}</h4>
                <h4>{name.last}</h4>
                <button>
                  <Link
                    className={style.links}
                    to={`/contact/${name.first}`}
                    state={user}>
                    Details
                  </Link>
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Contact;
