import React, { useContext } from "react";
import { AppContext } from "../context/context";

const MyButton = () => {
  const { setContext } = useContext(AppContext);

  const handleUpdateContextState = () => {
    const date = Date.now();
    const dateString = date.toString();

    setContext(dateString);
  };

  return <button onClick={handleUpdateContextState}>Update</button>;
};

export default MyButton;
