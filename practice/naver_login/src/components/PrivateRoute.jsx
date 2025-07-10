import React, { useState } from "react";
import { useVerify } from "../hooks/useVerify";

const PrivateRoute = ({ children }) => {
  const [verify, setVerify] = useState(false);

  useVerify({
    onSuccess: () => setVerify(true),
    onFailure: () => setVerify(false),
  });

  if (!verify) return <div>Loading...</div>;

  return <div>{children}</div>;
};

export default PrivateRoute;
