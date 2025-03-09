import css from "./Contact.module.css";
import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";

export default function Contact({ props, deleteContact }) {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <p className={css.p}>
          <ImUser /> {props.name}
        </p>
        <p className={css.p}>
          <ImPhone /> {props.number}
        </p>
      </div>

      <button className={css.button} onClick={() => deleteContact(props.id)}>
        Delete
      </button>
    </div>
  );
}
