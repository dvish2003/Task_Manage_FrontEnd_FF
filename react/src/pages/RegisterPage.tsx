import type {User, UserFormData} from "../model/User.ts";
import {useState} from "react";
import {addUser} from "../service/userService.ts";
import * as React from "react";
import {useNavigate} from "react-router-dom";



const RegisterPage :React.FC = () =>{
    const navigate = useNavigate();


    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState<UserFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        const errors: string[] = []

        if (!formData.name.trim()) {
            errors.push("Name is required");
        } else if (formData.name.trim().length < 2) {
            errors.push("Name must be at least 2 characters");
        }

        if (!formData.email.trim()) {
            errors.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.push("Please enter a valid email address");
        }

        if (!formData.password) {
            errors.push("Password is required");
        } else if (formData.password.length < 6) {
            errors.push("Password must be at least 6 characters");
        }

        if (formData.password !== formData.confirmPassword) {
            errors.push("Passwords do not match");
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
                return true
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (validateForm()) {
            console.log("Form submitted with data:", formData);
            const newUser_1:User = ({
                _id:"",
                name: formData.name,
                email: formData.email,
                password: formData.password
            })

            setUser(newUser_1)

            const newUser = await addUser(user);
            if (newUser) {
                alert("Registration successful!");
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate('/login'); // Redirect to login page after successful registration

            } else {
                alert("Registration failed. Please try again.");
            }

        }
    }



    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '0 1rem' }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
                color: '#333'
            }}>Register Page</h1>

            <form
                onSubmit={handleSubmit}
                style={{
                padding: '1.5rem',
                border: '1px solid #dee2e6',
                borderRadius: '0.375rem',
                backgroundColor: '#fff'
            }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor="name"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            color: '#212529'
                        }}
                    >
                        Name:
                    </label>
                    <input
                        value={formData.name}
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={handleChange}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#495057',
                            backgroundColor: '#fff',
                            border: '1px solid #ced4da',
                            borderRadius: '0.25rem',
                            transition: 'border-color 0.15s ease-in-out'
                        }}

                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor="email"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            color: '#212529'
                        }}
                    >
                        Email:
                    </label>
                    <input
                        value={formData.email}
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#495057',
                            backgroundColor: '#fff',
                            border: '1px solid #ced4da',
                            borderRadius: '0.25rem',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor="password"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            color: '#212529'
                        }}
                    >
                        Password:
                    </label>
                    <input
                        value={formData.password}
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#495057',
                            backgroundColor: '#fff',
                            border: '1px solid #ced4da',
                            borderRadius: '0.25rem',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="confirmPassword"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            color: '#212529'
                        }}
                    >
                        Confirm Password:
                    </label>
                    <input
                        value={formData.confirmPassword}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        onChange={handleChange}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#495057',
                            backgroundColor: '#fff',
                            border: '1px solid #ced4da',
                            borderRadius: '0.25rem',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        fontWeight: '400',
                        lineHeight: '1.5',
                        color: '#fff',
                        backgroundColor: '#0d6efd',
                        border: '1px solid #0d6efd',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease-in-out'
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage;