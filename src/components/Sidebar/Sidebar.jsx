import * as React from "react";
import PropTypes from "prop-types";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from "@mui/material";
//pictures
import Logo from "../../assets/images/LogoBus.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
//Sidebar is working now
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `10px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `250px`,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Sidebar(props) {
  const { window, data, role, logout } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleDrawerToggle = () => {
    if (!isClosing) {
      if (isSmallScreen) {
        setMobileOpen(!mobileOpen);
      } else {
        setOpen(!open);
      }
    }
  };
  React.useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
      setMobileOpen(true);
    }
  }, [isSmallScreen]);

  const roleBasedPages = {
    student: [
      { name: "Dashboard", path: "/student/dashboard", icon: <DashboardIcon /> },
      { name: "Card Form", path: "/student/request",icon: <CreditCardIcon />  },
      { name: "Point Routes", path: "/student/pointInformation",icon: <BusAlertIcon />  },
      { name: "Feedback", path: "/student/feedback",icon: <FeedbackOutlinedIcon />  },
      { name: "Tracking", path: "/student/pointTracking",icon: <DepartureBoardIcon />  },
    ],
    driver: [
      { name: "Dashboard", path: "/driver/dashboard", icon: <DashboardIcon /> },
      { name: "Select Point", path: "/driver/share-location",icon: <DepartureBoardIcon />  },
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
      { name: "Card Requests", path: "/admin/cardRequest", icon: <CreditCardIcon /> },
      { name: "Update Route", path: "/admin/routeInfo", icon: <DirectionsBusOutlinedIcon /> },
      { name: "Complaints", path: "/admin/complain", icon: <FeedbackOutlinedIcon /> },
      { name: "Form Deadline", path: "/admin/formDeadline", icon: <FeedbackOutlinedIcon /> },
      ],
  };

  const pages = roleBasedPages[role];
  const currentPage = pages.find((page) => page.path === location.pathname);
  
  const currentPageName = currentPage ? currentPage.name : "Dashboard";
  const handlePageNavigation = (path) => {
    navigate(path);
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <img src={Logo} alt="" height={isSmallScreen ? 180 : 130} />
        {!isSmallScreen && (
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List sx={{ color: "white", fontFamily: "outfit", mx: 2 }}>
        {pages.map((page) => (
          <ListItem
            key={page.name}
            disablePadding
            sx={{
              display: "block",
              my: 2,
              backgroundColor:
                location.pathname === page.path ? "white" : "transparent",
              color:
                location.pathname === page.path ? "rgb(42 141 58)" : "white",
              boxShadow:
                location.pathname === page.path
                  ? "5px 5px 5px 5px rgba(0, 0, 0, 0.1)" // Add shadow when active
                  : "none",
              borderRadius:
                location.pathname === page.path
                  ? "10px" // Add border when active
                  : "none",
            }}
            onClick={() => handlePageNavigation(page.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: 2,
                  mr: 1,
                  color: location.pathname === page.path ? "green" : "white",
                  justifyContent: "center",
                }}
              >
                {page.icon}
              </ListItemIcon>
              <ListItemText
                primary={page.name}
                // sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
 
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            bgcolor: "white",
            color: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2, ...(isSmallScreen && { display: "block" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontWeight={"bold"}
              fontFamily={"outfit"}
            >
              {currentPageName}
            </Typography>
          </div>

          {!isMobile && (
            <div>
              <IconButton color="inherit" aria-label="icon1" onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </div>
          )}
          {isMobile && (
            <IconButton aria-label="small-screen-btn" sx={{ pr: 0 }} onClick={logout}>
              {/* <SmallScreenBtn /> */}
              <LogoutIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant={isSmallScreen ? "temporary" : "persistent"}
        anchor="left"
        open={isSmallScreen ? mobileOpen : open}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgb(42 141 58)",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {data}
      </Main>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
  data: PropTypes.element,
};

export default Sidebar;
