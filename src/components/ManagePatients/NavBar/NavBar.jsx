import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="admin-index.html">Home</a></li>
        <li><a href="manage-doctors.html">Doctors</a></li>
        <li><a href="manage-appointments.html">Appointments</a></li>
        <li><a href="manage-hospitalizations.html">Hospitalizations</a></li>
        <li><a href="manage-rooms.html">Rooms</a></li>
        <li><a href="manage-medicalHistories.html">Medical Histories</a></li>
      </ul>
    </nav>
  );
};
