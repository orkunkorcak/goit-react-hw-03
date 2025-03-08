


function SearchBox({ filter, onChange }) {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
}
export default SearchBox;