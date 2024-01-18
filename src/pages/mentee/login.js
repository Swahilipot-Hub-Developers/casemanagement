import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                router.push('#')
            }

            const responseData = await response.json();
            console.log('Login successful:', responseData);
            // Here you can handle further logic like redirection or state update

        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-12">
                <div className="card">
                    <div className="card-body">
                        {error && <p>{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="email_address">Email Address</label>
                            <input
                                className="form-control"
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label className="form-label mt-2" htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                required
                            />
                            <button className="btn btn-primary mt-3">Login</button>
                        </form>
                        <div className="mt-3 mb-2 d-flex justify-content-between">
                            <Link href="#" legacyBehavior>
                                <a className="no-line">Create Account</a>
                            </Link>
                            <Link href="/reset-password" legacyBehavior>
                                <a className="no-line">Forgot Password</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
