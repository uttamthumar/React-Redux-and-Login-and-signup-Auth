import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/index";

function Profile() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <h1 className="p-5 justify-content-center"> welcome to  {location.state.userName}</h1>
    </div>
  );
}
export default Profile;
