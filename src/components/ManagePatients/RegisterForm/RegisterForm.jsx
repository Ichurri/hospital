
export const RegisterForm = () => {
  return (
    <form id="registerForm">
      <input type="hidden" id="patientID" />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <button type="submit" id="submitButton">Register Patient</button>
    </form>
  );
};
