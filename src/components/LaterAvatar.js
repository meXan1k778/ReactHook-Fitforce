import React from "react";

const LaterAvatar = ({ first_name, last_name }) => {
  return (
    <div className="laterAvatr">
      {first_name && first_name.charAt(0)}
      {last_name && last_name.charAt(0)}
    </div>
  );
};

export default LaterAvatar;
