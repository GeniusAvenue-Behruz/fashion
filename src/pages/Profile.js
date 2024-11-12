// Profile.js
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
const Profile = () => {
    // Initial state set from localStorage or defaults
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [surname, setSurname] = useState(localStorage.getItem('surname') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');

    // Save updated information to localStorage
    const handleSave = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('email', email);
        alert('Profile saved!');
    };

    useEffect(() => {
        // Optionally load any existing info when the component mounts
        setName(localStorage.getItem('name') || '');
        setSurname(localStorage.getItem('surname') || '');
        setEmail(localStorage.getItem('email') || '');
    }, []);

    return (
        <div className="profile">
        <NavBar/>
            <h1>Profile</h1>
            <div className="profile__section container">
                <label>
                    First Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Surname:
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button onClick={handleSave}>Save Profile</button>
            </div>
        </div>
    );
};

export default Profile;
