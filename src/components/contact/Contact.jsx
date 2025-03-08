
function Contact({ id, name, number, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <div>
      <div>
        <p>{name}</p>

        <p>{number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Contact;
