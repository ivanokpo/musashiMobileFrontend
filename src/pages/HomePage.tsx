import Home from "../components/Home";

import React from "react";

//class where home page main design is made
const HomePage = ({ backendUrl }: { backendUrl: any }) => {
  return <Home backendUrl={backendUrl} />;
};

export default HomePage;
