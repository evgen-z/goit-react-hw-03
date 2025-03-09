import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [inputFilter, setInputFilter] = useState("");

  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");

    if (savedContacts !== "undefined" && savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactsData));
  }, [contactsData]);

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(inputFilter.toLowerCase())
  );

  const deleteContact = (id) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const newContact = (newValue) => {
    setContactsData((prevContacts) => {
      return [...prevContacts, newValue];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={newContact} />
      <SearchBox inputFilter={inputFilter} setInputFilter={setInputFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
