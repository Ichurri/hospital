
export const PatientDetails = () => {
  return (
    <>
      <h2>Patient Details</h2>
      <div id="patientDetails" style={{ display: 'none' }}>
        <p><strong>Name:</strong> <span id="patientDetailName"></span></p>
        <p><strong>Address:</strong> <span id="patientDetailAddress"></span></p>
        <p><strong>Phone:</strong> <span id="patientDetailPhone"></span></p>
        <p><strong>Email:</strong> <span id="patientDetailEmail"></span></p>
      </div>
    </>
  );
};
