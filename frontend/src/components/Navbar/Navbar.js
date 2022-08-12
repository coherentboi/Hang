import React, { useState, useEffect } from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '../../images/logo.svg';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return{
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions
}

const Navbar = ({ setCurrentPage }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
      console.log(localStorage);
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [useSelector((state) => state)])

    const {height, width} = useWindowDimensions();

    const home = () => {
        history("/");
        setCurrentPage("home");
    }
    const chat = () => {
        history("/chat");
        setCurrentPage("chat");
    }
    const friends = () => {
        history("/friends");
        setCurrentPage("friends");
    }

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        if (open) {
        handleDrawerClose();
        } else {
        handleDrawerOpen();
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
      <Drawer variant="permanent" open={open} sx={{height : '100%'}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <List sx={{height : '100%'}}>
          <ListItem key={"logo"} disablePadding sx={{display: "block"}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
              onClick={home}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <img src={logo} style={{height: "24px", width: "24px"}}/>
              </ListItemIcon>
              <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0}}/>
            </ListItemButton>
          </ListItem>
          
          {user !== null &&
            (
              <ListItem key={"chat"} disablePadding sx={{display: "block"}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                  }}
                  onClick={chat}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center"
                    }}
                  >
                    <ChatIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Chat"} sx={{ opacity: open ? 1 : 0}}/>
                </ListItemButton>
              </ListItem>
            )
          }
          {user !== null &&
            <ListItem key={"friends"} disablePadding sx={{display: "block"}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
                onClick={friends}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Friends"} sx={{ opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          }
          {user !== null &&
            <ListItem key={"account"} disablePadding sx={{display: "block", position: height >= 264 ? "absolute" : "relative", bottom: 0}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
                onClick={friends}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Account"} sx={{ opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          }
        </List>
        
      </Drawer>
    );
};

export default Navbar;