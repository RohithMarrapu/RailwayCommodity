import React, { useState, useEffect } from 'react';

type Props = {
  onLoginSuccess: () => void;
};

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    contactNo: '',
    name: '',
    email: '',
    username: '',
    password: '',
    rePassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedIn');
    if (storedUser === 'true') {
      onLoginSuccess();
    }
  }, [onLoginSuccess]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isSignUp) {
      if (!validateEmail(formData.email)) {
        setError('Invalid email address.');
        return;
      }

      if (!validatePassword(formData.password)) {
        setError('Password must have at least 6 characters, one uppercase letter, one number, and one special character.');
        return;
      }

      if (formData.password !== formData.rePassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    const endpoint = isSignUp
      ? 'http://localhost:5000/signup'
      : 'http://localhost:5000/login';

    const payload = isSignUp
      ? formData
      : {
          username: formData.username.trim(),
          password: formData.password.trim(),
        };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      setSuccess(result.message);

      if (!isSignUp) {
        localStorage.setItem('isLoggedIn', 'true');
        onLoginSuccess();
      } else {
        setFormData({
          contactNo: '',
          name: '',
          email: '',
          username: '',
          password: '',
          rePassword: '',
        });
      }
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Something went wrong. Try again.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        {success && (
          <p className="text-green-600 mb-4 text-sm text-center">{success}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <input
                type="tel"
                placeholder="Contact No."
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={formData.contactNo}
                onChange={(e) =>
                  setFormData({ ...formData, contactNo: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </>
          )}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={formData.rePassword}
              onChange={(e) =>
                setFormData({ ...formData, rePassword: e.target.value })
              }
            />
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
              setSuccess('');
            }}
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
