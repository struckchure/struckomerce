import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../store/actions/accounts";

export const Logout = ({ logoutUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();

    navigate("/");
  }, []);

  return <div>Logout</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
