import { useState } from "react";
import type { User, UserLoginData } from "../model/User.ts";
import {loginUser} from "../service/userService.ts";
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {log} from "../Store/slice/AuthSlice.ts";

const LoginPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const [formData, setFormData] = useState<UserLoginData>({
        email: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        const errors: string[] = [];

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

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            const user_1 :User = {
                _id: '',
                name: '',
                email: formData.email,
                password: formData.password
            }
            console.log("user 1 : ",user);

            setUser(user_1);

          console.log("user 2 : ",user);
            const response = await loginUser(user);
            if(response !== null){
                if(rememberMe){
                    localStorage.setItem('token', JSON.stringify(response));
                    dispatch(log())
                    navigate('/Home')
                } else {
                    sessionStorage.setItem('token', JSON.stringify(response));
                    dispatch(log())
                    navigate('/Home')

                }
            }
            console.log("response   : ",response);


        }
    };

    return (
        <form onSubmit={handleSubmit} style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold'
                }}>Email address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
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
                        transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                    }}
                    id="email"
                    aria-describedby="emailHelp"
                />
                <div id="emailHelp" style={{
                    marginTop: '0.25rem',
                    fontSize: '0.875rem',
                    color: '#6c757d'
                }}>We'll never share your email with anyone else.</div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold'
                }}>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
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
                        transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                    }}
                    id="password"
                />
            </div>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{
                        marginRight: '0.5rem',
                        marginTop: '0'
                    }}
                    id="rememberMe"
                />
                <label style={{ marginBottom: '0' }} htmlFor="rememberMe">Remember me</label>
            </div>
            <button
                type="submit"
                style={{
                    display: 'inline-block',
                    fontWeight: '400',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                    userSelect: 'none',
                    border: '1px solid transparent',
                    padding: '0.375rem 0.75rem',
                    fontSize: '1rem',
                    lineHeight: '1.5',
                    borderRadius: '0.25rem',
                    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    color: '#fff',
                    backgroundColor: '#0d6efd',
                    borderColor: '#0d6efd',
                    cursor: 'pointer'
                }}
            >
                Submit
            </button>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                    Don't have an account?{' '}
                    <Link to="/signup" style={{ color: '#0d6efd', textDecoration: 'none' }}>
                        Sign up
                    </Link>
                </p>
            </div>

        </form>
    );
};

export default LoginPage;