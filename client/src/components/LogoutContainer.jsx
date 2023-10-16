import { FaUserCircle, FaCaretDown, FaUser } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import DashboardLayout, { useDashboardContext } from "../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState();
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
