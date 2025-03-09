import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {contacts.map((contact) => {
          return (
            <li className={css.li} key={contact.id}>
              <Contact props={contact} deleteContact={deleteContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
