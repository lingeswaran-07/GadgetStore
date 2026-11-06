// import { useState } from 'react';
// import './Signup.css';
// import axios from 'axios';

// function Signup({ onClose, setShowLogin }) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
//             setError('All fields are required');
//             return;
//         }

//         try {
//             const result = await axios.post('http://localhost:3001/register', { name, email, password });
//             console.log(result.data);
//             alert("Registered successfully!");

//             // Optionally, switch to the login view
//             setShowLogin(true);
//             onClose();
//         } catch (err) {
//             console.error(err);
//             setError('Failed to register');
//         }
//     };

//     return (
//         <div className="signup-container">
//             <form onSubmit={handleSubmit} className="signup-form">
//                 <button type="button" className="close-button" onClick={onClose}>&times;</button>
//                 <h2>Sign Up</h2>
//                 {error && <p className="error">{error}</p>}
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder='Enter your name'
//                     required
//                 />
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
//                 <button type="submit" className="signup-button">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Signup;


import { useState } from 'react';
import './Signup.css';
import axios from 'axios';

function Signup({ onClose, setShowLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        try {
            await axios.post('http://localhost:3001/register', { name, email, password });
            alert("Registered successfully!");
            setShowLogin(true);
            onClose();
        } catch (err) {
            setError('Failed to register');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <button type="button" className="close-button" onClick={onClose}>&times;</button>
                <h2>Sign Up</h2>
                {error && <p className="error">{error}</p>}
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
