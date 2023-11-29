import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Form = () => {
  const { updateName, updateLocation } = useContext(UserContext);

  const handleNameChange = (event) => {
    updateName(event.target.value);
  };

  const handleLocationChange = (event) => {
    updateLocation(event.target.value);
  };

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">İsmi Güncelle: </label>
        <input className="input" onChange={handleNameChange} />
      </div>
      <div className="input-item">
        <label className="label">Konumu Güncelle: </label>
        <input className="input" onChange={handleLocationChange} />
      </div>
    </div>
  );
};

export default Form;
