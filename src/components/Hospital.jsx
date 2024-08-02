import { Header } from "./Header/Header";
import { AboutDoctors } from "./Doctors/AboutDoctors";
import { Technology } from "./Technology/Technology";

export const Hospital = () => {
  return (
    <>
      <Header />
      <main className="grid-container">
        <section className="introduction">
          <h2>Welcome to Las Primas Hospital</h2>
          <p>At Las Primas Hospital, we provide top-notch medical care with a team of highly skilled professionals. Our state-of-the-art facilities and commitment to patient-centered care ensure that you receive the best treatment possible.</p>
        </section>
        <AboutDoctors/>
        <Technology/>
      </main>
    </>
  );
};

