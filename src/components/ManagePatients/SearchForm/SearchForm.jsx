
export const SearchForm = () => {
  return (
    <form id="searchPatientForm">
      <label htmlFor="searchName">Search by Name:</label>
      <input type="text" id="searchName" name="searchName" />
      <button type="submit">Search Patient</button>
    </form>
  );
};
