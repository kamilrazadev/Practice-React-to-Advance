import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Component = () => {
  const { context } = useContext(AppContext);
  return <div>State Value: {context}</div>;
};

export default Component;
