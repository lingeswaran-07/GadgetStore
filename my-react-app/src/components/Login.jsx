// import  { useState } from 'react';
// import './Login.css';
// import axios from 'axios';

// function Login({ onClose, setShowSignup }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const result = await axios.post('http://localhost:3001/login', { email, password });
//             if (result.data === 'success') {
//                 // Handle successful login
//                 alert("Login successfully");
//                 onClose(); // Close the login form
//             } else {
//                 setError(result.data);
//             }
//         } catch (err) {
//             console.error(err);
//             setError('Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <form onSubmit={handleSubmit} className="login-form">
//                 <button type="button" className="close-button" onClick={onClose}>&times;</button>
//                 <h2>Login</h2>
//                 {error && <p className="error">{error}</p>}
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder='Enter your email'
//                     required
//                 />
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder='Enter your password'
//                     required
//                 />
//                 <button type="submit">Login</button>
//                 <div className="signup-link">
//                     <p>If you don't have an account, you can</p>
//                     <button type="button" className="signup-button" onClick={() => {
//                         onClose(); // Close login
//                         setShowSignup(true); // Open signup
//                     }}>Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;


import { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login({ onClose, setShowSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert("Login successful");
            onClose();
        } catch (err) {
            setError(err.response?.data || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <button type="button" className="close-button" onClick={onClose}>&times;</button>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <button onClick={() => { onClose(); setShowSignup(true); }}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
