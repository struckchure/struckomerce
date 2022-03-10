import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { registerUser } from "../../../store/actions/accounts";
import AuthLayout from "../../../layouts/accounts/AuthLayout";

function Register({ registerUser }) {
  const navigate = useNavigate();

  const [is_loading, set_loading] = useState(false);

  const [user_data, set_user_data] = useState({
    username: "",
    email: "",
    password: "",
  });

  const update_user_data = ({ target }) => {
    const { name, value } = target;

    set_user_data({
      ...user_data,
      [name]: value,
    });
  };

  const register_user = (e) => {
    e.preventDefault();

    registerUser(user_data);

    navigate("/login");
  };

  const { username, email, password } = user_data;

  return (
    <AuthLayout>
      <form onSubmit={register_user}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            disabled={is_loading}
            value={username}
            name="username"
            type="text"
            onChange={update_user_data}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">E-Mail</label>
          <input
            disabled={is_loading}
            value={email}
            name="email"
            type="email"
            onChange={update_user_data}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            disabled={is_loading}
            value={password}
            name="password"
            type="password"
            onChange={update_user_data}
          />
        </div>

        <div className="form-group">
          <input disabled={is_loading} type="checkbox" />
          <span>I Agree</span>
        </div>

        <div className="grid-center my-2 gap-2">
          <button disabled={is_loading}>
            <span className="px-2">Register</span>
            <i className={"spinner arrow right animate-spin"}></i>
          </button>

          <small>
            <Link to={{ pathname: "/login/" }}>Already have an account</Link>
          </small>

          <small>
            <Link to={{ pathname: "#" }}>Terms and conditions</Link>
          </small>
        </div>
      </form>
    </AuthLayout>
  );
}

const mapStateToProps = (state) => ({});
const mapPropsToDispatch = {
  registerUser,
};

export default connect(mapStateToProps, mapPropsToDispatch)(Register);
