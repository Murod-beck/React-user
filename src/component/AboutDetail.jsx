import { useParams, useLocation } from "react-router-dom";
function AboutDetail() {
  const location = useLocation();
  const id = useParams();
  const { state } = location;

  console.log(state);
  console.log(id);

  return (
    <div>
      <h1>{state.password}</h1>
      <h1>{state.md5}</h1>
      <h1>{state.sha1}</h1>
      <h1>{state.username}</h1>
    </div>
  );
}

export default AboutDetail;
