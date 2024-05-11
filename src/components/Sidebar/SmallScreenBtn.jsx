import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import loggedout from "../../assets/images/loggedout.png";
import style from "../../assets/images/style=fill.png";
import Ellipse from "../../assets/images/Ellipse 9.png";

const settings = [loggedout, style, Ellipse];

function SmallScreenBtn() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    document.body.classList.add("menu-open"); // Add a CSS class to body when the menu is open
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    document.body.classList.remove("menu-open"); // Remove the CSS class from body when the menu is closed
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <MoreHorizIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            <img
              src={setting}
              alt=""
              style={{ width: "20px", height: "24px" }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default SmallScreenBtn;