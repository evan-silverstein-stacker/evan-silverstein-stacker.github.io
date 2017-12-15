import React from 'react'
import Section from '../Section'
import Item from '../Item';

class TechnicalSkills extends React.Component{
    render(){
        let items = this.props.skills.map((skill)=>{
            return(
                <Item key={skill.id} label={skill.label}>
                    {skill.description}
                </Item>
            ) 

        })
        return(
            <Section caption="Technical Skills">
                {items}
            </Section>
        )
    }
}

export default TechnicalSkills;