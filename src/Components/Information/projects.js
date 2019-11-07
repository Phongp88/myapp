import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import AnimeSample from './animeSample.PNG';
import TodoList from './todolist.PNG'
import reactShop from './reactShop.PNG';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));
let projectDescription = ''
let projectSource = ''
let projectImage = '';
let projectTitle = ''
let projectDemo = ''
export default function TranprositionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (project) => {
    switch(project) {
      case 'anime':
        projectDescription = ` The project idea here is that the user can create an
         account, track all the shows the currently have watched and also track what episodes they were currently on. The user can add additional existing animes
         and add them to their favorites. `;
        projectSource = 'https://github.com/Phongp88/AnimeTracker';
        projectImage = AnimeSample;
        projectTitle = 'Anime List Tracker - Work in Progress'
        projectDemo = ''
        break;
      case 'reactShop':
          projectDescription = `This completed React/Redux project is a basic shopping store that manages data and state using Redux.
          You can add shirts to the shopping cart by simply clicking add to cart or clicking on the product image. The basket calculates the total and displays
          the quantity of items they currently have. The user may remove items they do not wish to have anymore. Filtering is done with redux where data will change
          based on the users inputs from both price and size. Check out does not currently work.`;
          projectSource = 'https://github.com/Phongp88/ReactShirtStore';
          projectImage = reactShop;
          projectTitle = 'React/Redux Shop'
          projectDemo = 'https://react-shop-example.firebaseapp.com/'
          break;
      case 'todo':
          projectDescription = `This is a simple todo list web application that uses React that displays 2 components, a list and a state viewer. I was currently learning ReactJs playing around with the newly introduced hooks
          that was futured in the newset versions of React. This is to test to see if class components are needed anymore.`;
          projectSource = 'https://github.com/Phongp88/ToDoListReact';
          projectImage = TodoList;
          projectTitle = 'React/Redux Shop'
          projectDemo = 'https://reacttodolist-8a4ff.web.app/'
          break;
      default:
        console.log('Something went wrong');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Projects</h2>
      <div className="projectInformation">
      <a href="#" onClick={()=> handleOpen('reactShop')}>
          <div className="gridInformation">
            <h3 className="projectTitle">React Shopping Cart</h3>
            <p className="projectDescription">T-Shirt store web application that uses React/Redux hosted on firebase</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="#" onClick={()=> handleOpen('anime')}>
          <div className="gridInformation">
            <h3 className="projectTitle">Anime List Tracker</h3>
            <p className="projectDescription">Developing an anime tracking site using React, Redux and MongoDB</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="#" onClick={()=> handleOpen('todo')}>
          <div className="gridInformation">
            <h3 className="projectTitle">Todo List</h3>
            <p className="projectDescription">Developed a Todo list in react to understand the basics of state and components</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="#">
          <div className="gridInformation">
          <h3 className="projectTitle">My Personal Website</h3>
            <p className="projectDescription">Website to sell myself by only using React and Material UI. You're looking at it right now</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="projectModal">
            <div className="projectBody">
              <div className="titleExit">
                <h2 className='projectModalTitle'>{projectTitle}</h2>
                <span className="closeModal" onClick={()=> handleClose()}>X</span>
              </div>
              <hr className="projectDivider"></hr>
              <div className="projectModalDescription">
                <img src={projectImage} className='projectImage'/>
                <h3>{projectDescription}</h3>
              </div>
              <hr className="projectDivider"></hr>
              <div className="projectSources">
                <IconButton color="inherit">
                    <i class="fab fa-github"></i>
                </IconButton>
                <h3><a href="https://github.com/Phongp88/AnimeTracker" target="_blank" className="projectGithub">Github </a></h3>
                {projectDemo !== ''  &&<h3><a href={projectDemo} className="projectDemo" target="_blank">Demo</a></h3>}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}