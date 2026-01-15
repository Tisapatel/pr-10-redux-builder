import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";

const Signup = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { editData } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (editData?.id) {
      setUser(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    setUser({});
    navigate('/viewUser')
  };

   const handleUpdate = () => {
    dispatch(updateUser(user));
    setUser({});
    navigate("/viewUser"); 
  };
  
  return (
    <div className="min-vh-100" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.4
      }}></div>

      <div className="container py-5" style={{position: 'relative', zIndex: 1}}>
        <div className="row">
          {/* Left Side - Illustration */}
          <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>
                Start Tech
              </h1>
              <p className="lead" style={{fontSize: '1.3rem', opacity: 0.95}}>
                Join our community and start your journey today!
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              maxWidth: '480px',
              margin: '0 auto'
            }}>
              <div className="card-body p-5">
                <h2 className="text-center fw-bold mb-4" style={{color: '#667eea', fontSize: '2rem'}}>
                  {editData?.id ? "Update Account" : "Create Account"}
                </h2>

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{color: '#4a5568', fontSize: '0.9rem'}}>
                    Full name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user.username || ""}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    style={{
                      background: '#f7fafc',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.background = '#ffffff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.background = '#f7fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{color: '#4a5568', fontSize: '0.9rem'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    style={{
                      background: '#f7fafc',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.background = '#ffffff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.background = '#f7fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{color: '#4a5568', fontSize: '0.9rem'}}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    style={{
                      background: '#f7fafc',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.background = '#ffffff';
                      e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.background = '#f7fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {editData?.id ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="btn btn-lg w-100 fw-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '16px',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(245, 87, 108, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.3)';
                    }}
                  >
                    Update Account
                  </button>
                ) : (
                  <button 
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-lg w-100 fw-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '16px',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                    }}
                  >
                    Create Account
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;