import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { setError } from "../store/actions/common";

export const Alert = ({ is_loading, error, setError }) => {
  const on_close = () => {
    setError(null);
  };

  const notify = () => {
    const { status, message } = error;

    let error_type = "success";

    if (status >= 100 && status < 300) error_type = "SUCCESS";
    // 100 -> 299
    else if (status >= 300 && status < 400) error_type = "WARNING";
    // 300 -> 399
    else if (status >= 400 && status <= 500) error_type = "ERROR";
    // 400 -> 500

    switch (error_type) {
      case "SUCCESS":
        toast.success(message, { onClose: on_close() });
        break;
      case "WARNING":
        toast.warn(message, { onClose: on_close() });
        break;
      case "ERROR":
        toast.error(message, { onClose: on_close() });
        break;
      default:
        toast("Alert here", { onClose: on_close() });
    }
  };

  useEffect(() => {
    if (error) notify();
  }, [error]);

  return <></>;
};

const mapStateToProps = (state) => ({
  is_loading: state.common.is_loading,
  error: state.common.error,
});

const mapDispatchToProps = { setError };

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
