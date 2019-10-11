import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);



  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Phong Pham
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <a href="mailto:phongp27@gmail.com" target="_top" class="navButtons">
            <IconButton color="inherit">
                <MailIcon />
            </IconButton>
            </a>
            <a href="https://github.com/phongp88/" class="navButtons">
            <IconButton color="inherit">
                <i class="fab fa-github"></i>
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/phong-pham-780591105/" class="navButtons">
            <IconButton color="inherit">
                <i class="fab fa-linkedin"></i>
            </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}