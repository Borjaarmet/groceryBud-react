import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
      return () => {
        clearTimeout(timeOut);
      };
    }, 2500);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
