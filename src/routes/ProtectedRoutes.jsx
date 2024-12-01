import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSigninSuccess } from "../redux/slices/auth";
import { dispatch } from "../redux/store";
import { getStorageItem } from "../utils/helper_functions";

const  ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const user = await getStorageItem("user");
      if (!user) {
        setLoader(false);
        navigate("/");
      } else {
        switch (user.role) {
          case "student":
            if (!location.pathname.startsWith("/student")) {
              navigate("/dashboard");
            }
            break;
          case "driver":
            if (!location.pathname.startsWith("/driver")) {
              navigate("/dashboard");
            }
            break;
          case "admin":
            if (!location.pathname.startsWith("/admin")) {
              navigate("/dashboard");
            }
            break;
          default:
            setLoader(false);
            navigate("/");
            break;
        }
        // Dispatch user data to Redux store
        dispatch(getSigninSuccess(user));
      }
      setLoader(false);
    })();
  }, []);

  return <div>{loader ? <></> : <Component />}</div>;
};

export default ProtectedRoutes;
