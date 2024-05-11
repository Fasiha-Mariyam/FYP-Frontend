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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { styles } from "./style";
import SideImg from "../../../assets/images/bus.png";
// import { signIn } from "../../../redux/slices/auth";
import { dispatch, useSelector } from "../../../redux/store";
import { setStorageItem, validateEmail } from "../../../utils/helper_functions";

import { useMediaQuery } from "@mui/material";

const Login = () => {
  //styles
  const { loginRight, heading, loginButton, logoImg } = styles;

  // states...
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const is900Less = useMediaQuery("(max-width:900px)");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emaiIsValid, setEmailIsValid] = React.useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

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
    console.log("clicked");
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return enqueueSnackbar(
        `Please enter ${!email.trim() ? "Email" : "Password"} `,
        {
          autoHideDuration: 3000,
          variant: "warning",
        }
      );
    }

    try {
      // const res = await dispatch(
      //   signIn({ email, password, superadmin: isAdmin })
      // );

      // if (res?.status === 200) {
      //   enqueueSnackbar("Login successfully", {
      //     autoHideDuration: 3000,
      //     variant: "success",
      //   });

      //   await setStorageItem("user", res?.data);
      navigate("/dashboard");
      // } else {
      //   enqueueSnackbar(`${res?.message}`, {
      //     autoHideDuration: 3000,
      //     variant: "error",
      //   });
      // }
    } catch (e) {
      console.log(e);
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
            ml: is900Less ? 20 : 0,
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
            <Box
              sx={{
                width: { xs: "300px", md: "30vw" },
                marginLeft: "auto",
                marginRight: "auto",
                my: 3,
              }}
            >
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
                Register
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
                  <Box sx={{ mt: 1 }}>
                    <Typography>
                      Already have an account{" "}
                      <Link
                        to="/login"
                        style={{
                          textDecoration: "none",
                          color: "rgb(42 141 59)",
                        }}
                      >
                        <span>Login</span>
                      </Link>
                    </Typography>
                  </Box>
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
                    Sign Up
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
