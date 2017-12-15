import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Content from 'ui/headers/Content';
import PROFILE from 'constants/PROFILE';
import Frame from 'ui/Frame';
import PageContent from 'ui/PageContent';
import Card from 'ui/MyCard';
import headshot from 'public/headshot.jpg';
import styles from './styles.css';



class Project extends React.Component{
    render(){
        var project = this.props.project;
        return(
            <div className={styles.card}>
                <Card 
                    title={project.title}
                    img={project.image}                   
                    text={project.description}
                    link={project.link}
                    />
            </div>
        )
    }
}

export default Project;