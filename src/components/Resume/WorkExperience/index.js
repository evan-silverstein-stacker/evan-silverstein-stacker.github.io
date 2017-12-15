import React from 'react'
import Section from '../Section'
import ItemComplex from '../ItemComplex'
import Point from '../Point'

class WorkExperience extends React.Component{
    render(){
        let items = this.props.jobs.map((job)=>{
            return(
                <ItemComplex 
                    key={job.id}
                    label={job.timePeriod}
                    title={job.title}
                    location={job.location}>

                    {getJobDescription(job)}
                </ItemComplex>
            ) 

        })
        return(
            <Section caption="Work Experience">
                {items}
            </Section>
        )
    }

    
}

export default WorkExperience;

function getJobDescription(job){
    let points = job.description.map((expItem,i)=>{
        return <Point key={i} expItem={expItem}/>
    })

    return points;
}