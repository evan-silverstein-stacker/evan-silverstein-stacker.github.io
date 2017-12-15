import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Content from 'ui/headers/Content';
import Frame from 'ui/Frame';
import PageContent from 'ui/PageContent';
import Card from 'ui/MyCard';
import headshot from 'public/headshot.jpg';
import styles from './styles.css';
import Project from './Project';
import PROFILE from 'constants/PROFILE';

// import styles from './styles.css';


class Portfolio extends React.Component{
    render(){
        let projectComponents = PROFILE.projects.map((project)=>{
            return(
                <div className={styles.cardWrapper}>
                    <Project project={project}/>
                </div>
            )
        })
         
        return(
            <div>
                <PageTitle text="Portfolio"/>
                <PageContent>
                    {/* <div className={styles.container}> */}
                        {projectComponents}
                    {/* </div> */}
                </PageContent>
            </div>
        )
    }
}

export default Portfolio;