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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center rounded-top-4">
              <h4 className="mb-0">
                {editData?.id ? "Update User" : "Create Account"}
              </h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                {editData?.id ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="btn btn-warning w-100"
                  >
                    Update User
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
