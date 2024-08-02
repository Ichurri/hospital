import './Technology.css';

const technologies = [
    {
        title: 'MRI and CT Scanners',
        imgSrc: './src/assets/images/technology/tech1.jpg',
        description: 'Our hospital is equipped with state-of-the-art MRI and CT scanners that provide high-resolution images for accurate diagnosis and treatment planning.',
    },
    {
        title: 'Robotic Surgery',
        imgSrc: './src/assets/images/technology/tech2.jpg',
        description: 'We offer robotic surgery for minimally invasive procedures, allowing for greater precision and faster recovery times for our patients.',
    },
];

export const Technology = () => {
    return (
        <>
            <section className="technology grid-item">
                <h2>Advanced Medical Technology</h2>
                {technologies.map((tech, index) => (
                    <div key={ index } className="tech-item">
                        <h3>{ tech.title }</h3>
                        <div className="tech-details">
                            <img src={ tech.imgSrc } alt={ tech.title } className="tech-image" />
                            <p>{ tech.description }</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

