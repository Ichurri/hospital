export const Grid = () => {
    return (
        <>
            <main class="grid-container">
                <section class="introduction">
                    <h2>Welcome to Las Primas Hospital</h2>
                    <p>At Las Primas Hospital, we provide top-notch medical care with a team of highly skilled professionals. Our state-of-the-art facilities and commitment to patient-centered care ensure that you receive the best treatment possible.</p>
                </section>
                <section class="about-doctors grid-item">
                    <h2>Our Doctors</h2>
                    <div class="doctor">
                        <h3>Dr. John Smith</h3>
                        <div class="doctor-details">
                            <img src="../assets/images/doctor1.jpg" alt="Dr. John Smith" class="doctor-image" />
                            <p>Cardiologist</p>
                            <p>Dr. John Smith has over 20 years of experience in cardiology and specializes in minimally invasive heart procedures.</p>
                        </div>
                    </div>
                    <div class="doctor">
                        <h3>Dr. Emily Johnson</h3>
                        <div class="doctor-details">
                            <img src="../assets/images/doctor2.jpg" alt="Dr. Emily Johnson" class="doctor-image" />
                            <p>Neurologist</p>
                            <p>Dr. Emily Johnson is a renowned neurologist with expertise in treating complex neurological disorders and conducting groundbreaking research.</p>
                        </div>
                    </div>
                    <div class="doctor">
                        <h3>Dr. Michael Brown</h3>
                        <div class="doctor-details">
                            <img src="../assets/images/doctor3.jpg" alt="Dr. Michael Brown" class="doctor-image" />
                            <p>Orthopedic Surgeon</p>
                            <p>Dr. Michael Brown specializes in orthopedic surgery and has successfully performed numerous joint replacement surgeries.</p>
                        </div>
                    </div>
                    <div class="doctor">
                        <h3>Dr. Sarah Davis</h3>
                        <div class="doctor-details">
                            <img src="../assets/images/doctor4.jpg" alt="Dr. Sarah Davis" class="doctor-image" />
                            <p>Pediatrician</p>
                            <p>Dr. Sarah Davis is a compassionate pediatrician dedicated to providing excellent care for children of all ages.</p>
                        </div>
                    </div>
                </section>
                <section class="technology grid-item">
                    <h2>Advanced Medical Technology</h2>
                    <div class="tech-item">
                        <h3>MRI and CT Scanners</h3>
                        <div class="tech-details">
                            <img src="../assets/images/tech1.jpg" alt="MRI Machine" class="tech-image" />
                            <p>Our hospital is equipped with state-of-the-art MRI and CT scanners that provide high-resolution images for accurate diagnosis and treatment planning.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <h3>Robotic Surgery</h3>
                        <div class="tech-details">
                            <img src="../assets/images/tech2.jpg" alt="Robotic Surgery" class="tech-image" />
                            <p>We offer robotic surgery for minimally invasive procedures, allowing for greater precision and faster recovery times for our patients.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <h3>Telemedicine</h3>
                        <div class="tech-details">
                            <img src="../assets/images/tech3.jpg" alt="Telemedicine" class="tech-image" />
                            <p>Our telemedicine services enable patients to consult with our specialists from the comfort of their homes, ensuring continuous care.</p>
                        </div>
                    </div>
                    <div class="tech-item">
                        <h3>Advanced Laboratory Services</h3>
                        <div class="tech-details">
                            <img src="../assets/images/tech4.jpg" alt="Laboratory" class="tech-image" />
                            <p>Our advanced laboratory is equipped with the latest technology to conduct a wide range of diagnostic tests with high accuracy.</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
