import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.keyword.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h4 className="title">Image Search</h4>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          className="form-input search-input"
          placeholder="Search..."
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
