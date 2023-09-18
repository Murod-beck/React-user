import { useLocation } from "react-router-dom";
function AboutDetail() {
  const location = useLocation();
  const { state } = location;

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
