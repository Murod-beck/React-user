import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function About() {
  const [more] = useState("https://randomuser.me/api/?results=10");
  const { data: users } = useFetch(more);
  return (
    <div>
      <h1>About</h1>
      {users &&
        users.results.map((user, index) => {
          const { login } = user;
          return (
            <div key={index}>
              <h2>{login.password}</h2>
              <Link to={`/about/${login.salt}`} state={login}>
                More
              </Link>
            </div>
          );
        })}
      ;
    </div>
  );
}

export default About;
