/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { dispatch, logOut } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Swal from "sweetalert2";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavBarPaths = ["/signup", "/","/login","/chat"];

  const getRole = (path) => {
    if (path.startsWith("/student")) {
      return "student";
    } else if (path.startsWith("/driver")) {
      return "driver";
    } else if (path.startsWith("/admin")) {
      return "admin";
    }
  };
  
  // Determine the role based on the current location
  const role = getRole(location.pathname);

  const hideNavBar = hideNavBarPaths.includes(location.pathname);
  const handleLogout = async () => {
    try {
      // Await the SweetAlert2 confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out of your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
        reverseButtons: true, // Optional, reverses the order of the buttons
      });
  
      if (result.isConfirmed) {
        // Log out the user
        await dispatch(logOut());
  
        // Navigate to login page
        navigate("/login");
  
        // Optional: Show a success message
        Swal.fire("Logged Out", "You have been logged out successfully.", "success");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  return (
    <div className="layout">
      {!hideNavBar && (
        <>
          <Sidebar logout={handleLogout} data={children} role={role}/>
        </>
      )}
      {hideNavBar && <main>{children}</main>}
    </div>
  );
};

export default Layout;