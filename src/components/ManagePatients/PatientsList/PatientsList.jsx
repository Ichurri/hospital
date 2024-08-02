
export const PatientsList = () => {
  return (
    <>
      <h2>Patients List</h2>
      <table id="patientsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Patient rows will be populated here */}
        </tbody>
      </table>
    </>
  );
};
