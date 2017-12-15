import React from 'react'
import Section from '../Section'
import Item from '../Item';

class ProfessionalSummary extends React.Component{
    render(){
        
        return(
            <Section caption="Professional Summary">
                {this.props.text}
            </Section>
        )
    }
}

export default ProfessionalSummary;