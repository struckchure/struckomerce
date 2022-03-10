import React, { useEffect } from "react";
import { connect } from "react-redux";

export const Loader = ({ is_loading }) => {
  let show = is_loading;

  useEffect(() => {
    show = is_loading;
  }, [show]);

  return show ? (
    <div className="fixed top-0 left-0 z-20 h-screen w-full bg-[rgba(0,0,0,0.3)]">
      <div className="progress-bar blur-[10rem]"></div>
      <div className="p-4">
        <i className="icon circle notch large animate-spin text-white"></i>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  is_loading: state.common.is_loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
