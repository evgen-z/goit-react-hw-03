import css from "./SearchBox.module.css";

export default function SearchBox({ inputFilter, setInputFilter }) {
  return (
    <div className={css.container}>
      <p className={css.p}>Search contacts by name:</p>
      <input
        className={css.input}
        type="text"
        value={inputFilter}
        onChange={(evt) => setInputFilter(evt.target.value)}
      />
    </div>
  );
}
