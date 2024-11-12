import React, { useState } from 'react';
import '../SignUp.css';
import NavBar from '../components/NavBar';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.surname.trim()) newErrors.surname = 'Surname is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        localStorage.setItem('name', formData.name);
        localStorage.setItem('surname', formData.surname);
        localStorage.setItem('email', formData.email);
        setSuccessMessage('Sign up successful! Welcome, ' + formData.name + '!');
        setFormData({ name: '', surname: '', email: '', password: '' });
    };

    return (
        <div>
            <NavBar />
            <div className="signup-container">
                <h2>Create an Account</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Enter your surname"
                        />
                        {errors.surname && <p className="error">{errors.surname}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;