import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, getAllUsers } from "../features/user/userSlice";
import { useNavigate } from "react-router";

const ViewUser = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleEdit = (id) => {
    dispatch(editUser(id));
    navigate('/')
  }
  
  return (
    <div className="min-vh-100 py-5" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-white mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>
            Users Management
          </h1>
          <p className="text-white-50" style={{fontSize: '1.1rem'}}>
            Manage all registered users
          </p>
        </div>

        <div className="card border-0 shadow-lg" style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px'
        }}>
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table align-middle" style={{marginBottom: 0}}>
                <thead>
                  <tr style={{borderBottom: '2px solid #e2e8f0'}}>
                    <th style={{
                      color: '#4a5568',
                      fontWeight: '700',
                      padding: '20px 16px',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Sr.No</th>
                    <th style={{
                      color: '#4a5568',
                      fontWeight: '700',
                      padding: '20px 16px',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Username</th>
                    <th style={{
                      color: '#4a5568',
                      fontWeight: '700',
                      padding: '20px 16px',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Email</th>
                    <th style={{
                      color: '#4a5568',
                      fontWeight: '700',
                      padding: '20px 16px',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Password</th>
                    <th style={{
                      color: '#4a5568',
                      fontWeight: '700',
                      padding: '20px 16px',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      textAlign: 'center'
                    }}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users?.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={user.id} style={{
                        borderBottom: '1px solid #f0f0f0',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'scale(1.01)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      >
                        <td style={{
                          padding: '20px 16px',
                          color: '#718096',
                          fontWeight: '500',
                          fontSize: '1rem'
                        }}>
                          {index + 1}
                        </td>
                        <td style={{
                          padding: '20px 16px',
                          color: '#2d3748',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}>
                          {user.username}
                        </td>
                        <td style={{
                          padding: '20px 16px',
                          color: '#4a5568',
                          fontSize: '1rem'
                        }}>
                          {user.email}
                        </td>
                        <td style={{
                          padding: '20px 16px',
                          color: '#a0aec0',
                          fontSize: '1rem'
                        }}>
                          ••••••••
                        </td>
                        <td style={{padding: '20px 16px', textAlign: 'center'}}>
                          <button
                            className="btn btn-sm me-2 fw-semibold"
                            onClick={() => handleEdit(user.id)}
                            style={{
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '8px 20px',
                              fontSize: '0.9rem',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm fw-semibold"
                            onClick={() => dispatch(deleteUser(user.id))}
                            style={{
                              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '8px 20px',
                              fontSize: '0.9rem',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(245, 87, 108, 0.4)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-5">
                        <div style={{
                          fontSize: '4rem',
                          marginBottom: '16px',
                          opacity: 0.3
                        }}>📭</div>
                        <div style={{
                          color: '#a0aec0',
                          fontSize: '1.2rem',
                          fontWeight: '500'
                        }}>
                          No users found
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;