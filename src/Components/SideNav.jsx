import {
  ExpandLess,
  ExpandMore,
  Group,
  Menu as MenuIcon,
} from "@mui/icons-material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ClassIcon from "@mui/icons-material/Class";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import PersonIcon from "@mui/icons-material/Person";
import WalletSharpIcon from "@mui/icons-material/WalletSharp";
import {
  AppBar,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const [open, setOpen] = useState({
    Students: false,
    Teachers: false,
    Subject: false,
    Syllabus: false,
    Fees: false,
    Exam: false,
    Class: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //LOGOUT HANDLER

  const [anchorEl, setAnchorEl] = useState(null);

  const LogoutIconClick = (event) => {
    setAnchorEl(event.currentTarget); // open menu at icon position
  };

  const handleClose = () => {
    setAnchorEl(null); // close menu
  };

  const handleLogout = () => {
    handleClose();
    // Clear user data if needed
    localStorage.clear();
    
    navigate("/login"); // go to login page
  };

  // LOGOUT HANDLER ENDS

  const drawerWidth = 260;
  const navbarHeight = 64; // px height of AppBar

  const drawer = (
    <div className="w-64 bg-white h-full border-r">
      <div className="flex items-center p-4">
        <img
          src="https://cbx-prod.b-cdn.net/COLOURBOX25083954.jpg?width=480&height=480&quality=70"
          alt="Logo"
          className="h-18 w-22 bg-white border rounded-2xl border-white  "
        />
      </div>
      <Divider />

      <List component="nav" className="text-gray-700">
        {/* DashBoard  */}
        <ListItemButton>
          <ListItemIcon>
            <GridViewOutlinedIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            onClick={() => navigate("/")}
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="DashBoard"
          />
        </ListItemButton>

        {/* Students */}
        <ListItemButton onClick={() => handleClick("Students")}>
          <ListItemIcon>
            <PersonIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Students"
          />
          {open.Students ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Students} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/students")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Student List
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/studentform")}
              className="pl-12"
            >
              <LibraryAddIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Student Registration
            </ListItemButton>
          </List>
        </Collapse>

        {/* Teachers */}
        <ListItemButton onClick={() => handleClick("Teachers")}>
          <ListItemIcon>
            <Group className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Teachers"
          />
          {open.Teachers ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Teachers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/teachers")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Teachers List
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/teacherform")}
              className="pl-12"
            >
              <LibraryAddIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Teacher Registration
            </ListItemButton>
          </List>
        </Collapse>

        {/* Subjects */}
        <ListItemButton onClick={() => handleClick("Subject")}>
          <ListItemIcon>
            <MenuBookOutlinedIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Subject"
          />
          {open.Subject ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Subject} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/subjectlist")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Subject List
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/subjectform")}
              className="pl-12"
            >
              <LibraryAddIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Add Subject
            </ListItemButton>
          </List>
        </Collapse>

        {/* Syllabus */}
        <ListItemButton onClick={() => handleClick("Syllabus")}>
          <ListItemIcon>
            <ArticleIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Syllabus"
          />
          {open.Syllabus ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Syllabus} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/syllabus")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Syllabus List
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/syllabusform")}
              className="pl-12"
            >
              <LibraryAddIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Add Syllabus
            </ListItemButton>
          </List>
        </Collapse>

        {/* Classes  */}
        <ListItemButton onClick={() => handleClick("Class")}>
          <ListItemIcon>
            <ClassIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Classes"
          />
          {open.Class ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Class} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/classlist")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Class List
            </ListItemButton>
          </List>
        </Collapse>

        {/* Fees */}
        <ListItemButton onClick={() => handleClick("Fees")}>
          <ListItemIcon>
            <WalletSharpIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Fees"
          />
          {open.Fees ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Fees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/feesstructure")}
              className="pl-12"
            >
              <FormatListBulletedIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Fees Structure
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/FeesStructureupdate")}
              className="pl-12"
            >
              <LibraryAddIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Update/Add Fees Structure
            </ListItemButton>
          </List>
        </Collapse>

        {/* Exam  */}
        <ListItemButton onClick={() => handleClick("Exam")}>
          <ListItemIcon>
            <ModeEditOutlinedIcon className="text-gray-500" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "darkgreen",
            }}
            primary="Exam"
          />
          {open.Exam ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.Exam} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => navigate("/examschedule")}
              className="pl-12"
            >
              <CalendarMonthIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Exam Schedule
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/examform")}
              className="pl-12"
            >
              <CalendarMonthIcon
                sx={{ marginRight: "2px", color: "green", fontSize: 28 }}
              />
              Add Exam / Date
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div className="flex">
      {/* Navbar */}
      <AppBar position="fixed" className="bg-white border-b">
        <Toolbar className="bg-green-500">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon className="text-gray-800" />
          </IconButton>
          <Typography
            className="flex items-center px-2"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img
              className="rounded-full w-18 h-16 p-2"
              src="https://cbx-prod.b-cdn.net/COLOURBOX25083954.jpg?width=480&height=480&quality=70"
              alt="logo"
            />
            <h1 className="font-bold text-2xl">Learning Management</h1>
          </Typography>

          <Typography>
            <AccountCircleRoundedIcon
              onClick={LogoutIconClick}
              sx={{ fontSize: 35, cursor: "pointer" }}
            />
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (below Navbar) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: `${navbarHeight}px`,
            height: `calc(100% - ${navbarHeight}px)`,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer (below Navbar) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: `${navbarHeight}px`,
            height: `calc(100% - ${navbarHeight}px)`,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
}
