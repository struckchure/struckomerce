import React from "react";
import { connect } from "react-redux";

export const Loader = ({ is_loading }) => {
  return is_loading ? (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0,0,0,0.3)]">
      <div className="blur-[10rem] progress-bar"></div>
      <div className="p-4">
        <i className="icon circle notch animate-spin text-white large"></i>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  is_loading: state.common.is_loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
