import React from "react";

const style = {
  display: "flex",
  justifyContent: "center"
};

export const Layout = ({ children }) => {
  return <div style={style}>{children}</div>;
};
