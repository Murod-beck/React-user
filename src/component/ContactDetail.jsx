import style from "./style/Contact.module.css";

import { useLocation } from "react-router-dom";

function ContactDetail() {
  const locaiton = useLocation();
  const { state } = locaiton;
  const { picture, id, location, name, phone, email, gender, dob, registered } =
    state;

  console.log(state);
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <img className={style.imgs} src={picture.large} alt="" />
      </div>
      <div className={style.cards}>
        <h3>
          NAME: <span>{name.last}</span>
        </h3>
        <h3>
          AGE: <span>{dob.age}</span>
        </h3>
        <h3>
          PHONE: <span>{phone}</span>
        </h3>
        <h3>
          EMAIL: <span>{email}</span>
        </h3>
        <h3>
          CITY: <span>{location.city}</span>
        </h3>
        <h3>
          GANDER: <span>{gender}</span>
        </h3>
        <h3>
          ID: <span>{id.value}</span>
        </h3>
        <h3>
          REGISTERED: <span>{registered.date}</span>
        </h3>
      </div>
    </div>
  );
}

export default ContactDetail;
