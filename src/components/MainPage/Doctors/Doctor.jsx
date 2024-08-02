import './Doctor.css'

export const Doctor = ({ name, specialty, imgSrc, description }) => {
    return (
        <>
            <div className="doctor">
                <h3>{name}</h3>
                <div className="doctor-details">
                    <img src={imgSrc} alt={name} className="doctor-image" />
                    <p>{specialty}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>

    );
};
