import { Outlet } from "react-router-dom";

function AboutLayout() {
  return (
    <div>
      <h2>My About</h2>
      <Outlet />
    </div>
  );
}

export default AboutLayout;
