import React, { useState } from "react";

import {
  ChevronRight,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";

import { styles } from "./style";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SideImg from "../../../assets/images/bus.png";
import LoginTabs from "../../../components/Auth/LoginTabs";
// import { signIn } from "../../../redux/slices/auth";
import { dispatch, useSelector } from "../../../redux/store";
import { setStorageItem, validateEmail } from "../../../utils/helper_functions";

import { useMediaQuery } from "@mui/material";
import { signUp } from "../../../redux/slices/auth";

const Login = () => {
  //styles
  const { loginRight, heading, loginButton, logoImg } = styles;

  // states...
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const [isDriver, setIsDriver] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [emaiIsValid, setEmailIsValid] = React.useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  // Mocked demo data based on roles
  const demoUsers = [
    {
      id: 1,
      email: "20f-m-bscs-12@students.duet.edu.pk",
      password: "password123",
      role: "student",
    },
    {
      id: 2,
      email: "20f-m-bscs-13@students.duet.edu.pk",
      password: "password123",
      role: "student",
    },
    {
      id: 3,
      email: "20f-m-bscs-31@students.duet.edu.pk",
      password: "password123",
      role: "student",
    },
    { id:4,email: "driver@gmail.com", password: "password123", role: "driver" },
    { id:5,email: "admin@gmail.com", password: "password123", role: "admin" },
  ];
  //functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
    const res = validateEmail(e.target.value);
    if (res) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email.trim() || !password.trim()) {
      return enqueueSnackbar(
        `Please enter ${!email.trim() ? "Email" : "Password"}`,
        {
          autoHideDuration: 3000,
          variant: "warning",
        }
      );
    }
  
    const user = demoUsers.find(
      (u) => u.email === email && u.password === password
    );
    console.log(user, "user");
  
    if (user) {
      // Dispatch the user object with role to Redux
      dispatch(signUp(user));
  
      // Save the user object with role to localStorage
      await setStorageItem("user", user);
  
      // Navigate based on user role
      switch (user.role) {
        case "student":
          navigate("/student/dashboard");
          break;
        case "teacher":
          navigate("/teacher/dashboard");
          break;
        case "admin":
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
  
      enqueueSnackbar("Login successfully", {
        autoHideDuration: 3000,
        variant: "success",
      });
    } else {
  
      if (isUser == true) {
        enqueueSnackbar("Use university provided email or password", {
          autoHideDuration: 3000,
          variant: "error",
        });
      } else {
        enqueueSnackbar("Invalid email or password", {
          autoHideDuration: 3000,
          variant: "error",
        });
      }
    }
  };
  
  return (
    <Grid container component="main" spacing={0} sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        md={5}
        height="100vh"
        justifyContent="center"
        alignItems="center"
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Grid
          item
          xs={false}
          component="img"
          src={SideImg}
          height="100vh"
          width="100vw"
          sx={{
            objectFit: "cover",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        sx={{ backgroundColor: "#fff" }}
        component={Paper}
        elevation={0}
        square
      >
        <Box
          sx={{
            ...loginRight,
            mr: "auto",
          }}
        >
          <Box component="img" sx={logoImg} />
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <LoginTabs
              {...{
                isAdmin,
                setIsAdmin,
                setEmail,
                setPassword,
                setIsDriver,
                isDriver,
                isUser,
                setIsUser,
              }}
            />
            <Box
              sx={{
                width: { xs: "300px", md: "30vw" },
                marginLeft: "auto",
                marginRight: "auto",
                my: 3,
              }}
            >
              {" "}
              <Link
                to="/"
                style={{ textDecoration: "none", color: "rgb(41 140 58)" }}
              >
                <ArrowBackOutlinedIcon />
              </Link>
              <Typography
                sx={{
                  textAlign: "start",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "#000000",
                  fontSize: { xs: "18px", md: "1.5vw" },
                }}
              >
                Sign In
              </Typography>
              <Typography
                sx={{
                  textAlign: "start",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#000000",
                  fontSize: { xs: "14px", md: "1vw" },
                }}
              >
                Please fill your information below
              </Typography>
            </Box>
            <Box sx={heading}>
              <Box
                component="form"
                noValidate
                sx={{
                  width: { xs: "300px", md: "30vw" },
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  sx={{
                    my: 3,
                    backgroundColor: "#FFFFFF",
                    fontFamily: "Outfit",
                    "& label.Mui-focused": {
                      color: "#000",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#000",
                      },
                    },
                  }}
                  margin="normal"
                  placeholder="Your email"
                  required
                  autoComplete="off"
                  fullWidth
                  error={!emaiIsValid && isEmailDirty ? true : false}
                  value={email}
                  onChange={(e) => handleEmailOnchange(e)}
                  id="email"
                  label="Email"
                  FormHelperTextProps={{
                    style: {
                      backgroundColor: "#fff",
                      marginLeft: "0rem",
                      marginRight: "0rem",
                      marginTop: "0rem",
                    },
                  }}
                  inputProps={{
                    onBlur: () => {
                      setIsEmailDirty(true);
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                  size="large"
                  helperText={
                    !emaiIsValid && isEmailDirty
                      ? email == ""
                        ? "Please enter email"
                        : "Please enter valid email"
                      : ""
                  }
                />

                <TextField
                  sx={{
                    backgroundColor: "#FFFFFF",
                    mt: 1,
                    fontFamily: "Outfit",
                    "& label.Mui-focused": {
                      color: "#000",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#000",
                      },
                    },
                  }}
                  id="password"
                  error={!passwordIsValid && isPasswordDirty ? true : false}
                  value={password}
                  fullWidth
                  label="Password"
                  placeholder="Your password"
                  onInput={() => setIsPasswordDirty(true)}
                  onChange={(e) => handlePasswordOnChange(e)}
                  onBlur={() => setIsPasswordDirty(true)}
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "#000" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff
                              sx={{
                                color: "#000",
                              }}
                            />
                          ) : (
                            <Visibility
                              sx={{
                                color: "#000",
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {!passwordIsValid && isPasswordDirty ? (
                  <FormHelperText sx={{ color: "red" }}>
                    Password must be greater than 7 characters
                  </FormHelperText>
                ) : (
                  ""
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    type="submit"
                    sx={loginButton}
                    endIcon={<ChevronRight sx={{ fontSize: "23px" }} />}
                  >
                    {isLoading ? (
                      <CircularProgress
                        color="inherit"
                        size="1rem"
                        sx={{ mr: 2 }}
                      />
                    ) : (
                      ""
                    )}
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
