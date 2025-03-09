import css from "./contact.module.css";

function Contact({ id, name, number, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <div className={css.contactDiv}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.dltButton} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Contact;
