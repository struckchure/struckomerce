import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../../../store/actions/accounts";
import AuthLayout from "../../../layouts/accounts/AuthLayout";

function Login({ is_authenticated, loginUser }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  let next_url = params.get("next") || "/";

  useEffect(() => {
    if (is_authenticated) {
      navigate(next_url);
    }
  }, [is_authenticated]);

  const [is_loading, set_loading] = useState(false);

  const [user_creds, set_user_creds] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user_creds;

  const update_user_creds = ({ target }) => {
    let { value, name } = target;
    set_user_creds({
      ...user_creds,
      [name]: value,
    });
  };

  const login_user = (e) => {
    e.preventDefault();

    loginUser(user_creds);
  };

  return (
    <AuthLayout>
      <form onSubmit={login_user}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            disabled={is_loading}
            value={username}
            onChange={update_user_creds}
            name="username"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            disabled={is_loading}
            value={password}
            onChange={update_user_creds}
            name="password"
            type="password"
          />
        </div>

        <div className="form-group">
          <input disabled={is_loading} type="checkbox" />
          <span>Keep me logged in</span>
        </div>

        <div className="grid-center my-2 gap-2">
          <button className="left" disabled={is_loading}>
            <span className="px-2">Login</span>
            <i className={"icon spinner arrow right"}></i>
          </button>
          <small>
            <Link to={{ pathname: "/register/" }}>I don't have an account</Link>
          </small>
        </div>
      </form>
    </AuthLayout>
  );
}

const mapStateToProps = (state) => ({
  is_authenticated: state.accounts.is_authenticated,
});
const mapPropsToDispatch = {
  loginUser,
};

export default connect(mapStateToProps, mapPropsToDispatch)(Login);
