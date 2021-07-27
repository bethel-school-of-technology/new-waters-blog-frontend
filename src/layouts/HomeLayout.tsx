import React from "react";

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
