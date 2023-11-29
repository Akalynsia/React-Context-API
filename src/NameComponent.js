import React, { useContext } from "react";
import { UserContext } from "./UserContext";

// Bu bileşen contex'ten ismi görüntüler
const RandomComponent = () => {
  const { userName } = useContext(UserContext);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* İsmi context'ten buraya iletin */}
        <strong>Name</strong>: {userName}
      </h2>
    </div>
  );
};

export default RandomComponent;
