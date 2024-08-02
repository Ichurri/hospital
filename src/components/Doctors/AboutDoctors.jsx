import { Doctor } from "./Doctor";

const doctors = [
    {
        name: 'Dr. John Smith',
        specialty: 'Cardiologist',
        imgSrc: './src/assets/images/doctor1.jpg',
        description: 'Dr. John Smith has over 20 years of experience in cardiology and specializes in minimally invasive heart procedures.',
    },
    {
        name: 'Dr. Emily Johnson',
        specialty: 'Neurologist',
        imgSrc: './src/assets/images/doctor2.jpg',
        description: 'Dr. Emily Johnson is a renowned neurologist with expertise in treating complex neurological disorders and conducting groundbreaking research.',
    },
];

export const AboutDoctors = () => {
    return (
        <>
            <section className="about-doctors grid-item">
                <h2>Our Doctors</h2>
                {doctors.map((doctor, index) => (
                    <Doctor
                        key={index}
                        name={doctor.name}
                        specialty={doctor.specialty}
                        imgSrc={doctor.imgSrc}
                        description={doctor.description}
                    />
                ))}
            </section>
        </>
    );
};

