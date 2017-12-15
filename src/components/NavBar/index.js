import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class NavBar extends React.Component{


    handleTitleClick(){
        
    }

    render(){
        return(
            <AppBar
            title={""}
            onTitleClick={this.props.onTitleClick}
            //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementLeft={<div/>}
            iconElementRight={
                <div>

                    <Link to={'/'}>
                        <FlatButton label="Portfolio"/>
                    </Link>

                    <Link to={'/about'}>
                        <FlatButton label="About"/>
                    </Link>
                    <Link to={'/resume'}>
                        <FlatButton label="Resume"/>
                     </Link>

                     <Link to={'/contact'}>
                        <FlatButton label="Contact"/>
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