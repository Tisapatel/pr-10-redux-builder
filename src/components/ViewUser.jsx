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
    <div className="container mt-5">
      <div className="card shadow border-0 rounded-4">
        <div className="card-header bg-dark text-white text-center">
          <h4 className="mb-0">Users List</h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover text-center align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>Sr.No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users?.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-warning me-2"
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => dispatch(deleteUser(user.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-muted">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
