import Contact from "../contact/Contact";


function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul >
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
