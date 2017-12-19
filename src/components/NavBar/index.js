import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
import NavBarButton from 'ui/Buttons/NavBarButton';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PROFILE from 'constants/PROFILE';
//import styles from 'styles.css';

class NavBar extends React.Component{

    handleTitleClick(){
        
    }

    render(){
        return(
            <AppBar
            title={PROFILE.name}
            onTitleClick={this.props.onTitleClick}
            //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementLeft={<div/>}
            iconElementRight={
                <div  style={{marginTop:'8px'}}>

                    <Link to={'/'}>
                        <NavBarButton label="Portfolio"/>
                    </Link>

                    <Link to={'/about'}>
                        <NavBarButton label="About"/>
                    </Link>
                    <Link to={'/resume'}>
                        <NavBarButton label="Resume"/>
                     </Link>

                     <Link to={'/contact'}>
                        <NavBarButton label="Contact"/>
                     </Link>
              
                    
                </div>
                }

          />
        )
    }

}

// const AppBarExampleIconButton = () => (
//     <AppBar
//       title={<span style={styles.title}>Title</span>}
//       onTitleClick={handleClick}
//       iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//       iconElementRight={<FlatButton label="Save" />}
//     />
//   );
  
  export default NavBar;