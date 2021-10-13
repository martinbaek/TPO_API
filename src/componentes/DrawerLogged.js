import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const drawerWidth =  450;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    display: 'flex', 
    marginLeft: 'auto'
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link to ="/" style={{ textDecoration: 'none' }}>
          <Button variant="text"><h1>MEDIPED</h1></Button>
          </Link>
          <Link to ="/LogInPage" className={classes.title} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" className={classes.title}>log out</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <Link to ="/ProfilePage" style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary='Perfil' />
            </ListItem>
          </Link>
        <Link to ="/PacientePage" style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary='Paciente/s' />
            </ListItem>
          </Link>
        <Divider />
           <Link to ="/CalendarioPage" style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary='Calendario de vacunación' />
            </ListItem>
          </Link>
          <Link to ="/ControlesMedicos" style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='Información sobre controles médicos' />
              </ListItem>
          </Link>
          <Link to ="/Percentiles" style={{ textDecoration: 'none'}}>
            <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='Percentiles y parámetros generales de control' />            
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        </Typography>
        <br/>
        <br/>
        <br/>
      </main>
    </Box>
  );
}