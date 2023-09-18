import style from "./style/Header.module.css";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className={style.crumb} key={index}>
          <Link to={currentLink.join("")}>{crumb.toUpperCase()}</Link>
        </div>
      );
    });

  return <div className={style.crumbs}>{crumbs}</div>;
}

export default BreadCrumb;
