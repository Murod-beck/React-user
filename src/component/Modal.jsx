import style from "./style/Modal.module.css";

function MOdal() {
  return (
    <div className={style["modal-overlay"]} data-close="true">
      <div className={style.modal}></div>
    </div>
  );
}

export default MOdal;
