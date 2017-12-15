import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <p className={this.props.className}> {this.props.text} </p>
        )
    }
}

export default Content;