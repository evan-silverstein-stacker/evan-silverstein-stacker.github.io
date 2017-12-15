import React from 'react';

class PageTitle extends React.Component{
    render(){
        return(
            <h1> {this.props.text} </h1>
        )
    }
}

export default PageTitle;