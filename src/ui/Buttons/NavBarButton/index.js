import React from 'react';
import FlatButton from 'material-ui/FlatButton';


class NavBarButton extends React.Component{
    render(){
        const style = {
            color: "white",
        }
        return(
            <FlatButton style={style}> {this.props.label} </FlatButton>
        )
    }
}

export default NavBarButton