import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img className="logo" src="./src/assets/logos/hospital-logo.png" alt="hospital-logo" />
            </div>

            <div className="header-center">
                <h1 className="title">Manage Patients</h1>
            </div>

            <div className="header-right">
                <a className="manage-link" href="#crud-operations">Doctors</a>
                <a className="manage-link" href="#client">Rooms</a>
                <a className="manage-link" href="#client">Appointments</a>
            </div>
        </header>
    )
}
