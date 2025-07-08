import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    if (name && room) {
      navigate(`/chat?name=${name}&room=${room}`);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Chat</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button className="button mt-20" onClick={handleJoin} type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Join;
