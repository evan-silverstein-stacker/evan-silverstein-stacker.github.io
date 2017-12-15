import React from 'react'
import Section from '../Section'
import Item from '../Item';

class Iterests extends React.Component{
    render(){
        
        return(
            <Section caption="Interests">
                {this.props.text}
            </Section>
        )
    }
}

export default Iterests;