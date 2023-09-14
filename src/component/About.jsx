import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function About() {
  const [more, setMore] = useState("https://randomuser.me/api/?results=10");
  const { data: users } = useFetch(more);
  console.log(users);
  return (
    <div>
      <h1>About</h1>
      {users &&
        users.results.map((user) => {
          console.log(user);
          const { login } = user;
          return (
            <div key={login.md5}>
              <h2>{login.password}</h2>
            </div>
          );
        })}
      <NavLink>More</NavLink>
    </div>
  );
}

export default About;
